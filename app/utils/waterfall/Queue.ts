import until from './until';

interface QueueOptions {
    workerUrl: string;
    workerOptions: WorkerOptions;
    concurrency: number;
};

const defaultQueueOptions = {
    workerUrl: '/',
    workerOptions: {},
    concurrency: -1
}
class Queue {
    workerInit: boolean = false;
    concurrency;
    inFlight: number = 0;
    pendingEntries: string[] = [];

    err: unknown = null;

  constructor(worker: Worker, options: QueueOptions = defaultQueueOptions) {
    // this.worker = new Worker(options.workerUrl, options.workerOptions);
    this.concurrency = options.concurrency || 1;
  }

  push = (entries: string[]) => {
    this.pendingEntries = this.pendingEntries.concat(entries);
    this.process();
  };

  process = () => {
    const scheduled = this.pendingEntries.splice(0, this.concurrency - this.inFlight);
    this.inFlight += scheduled.length;
    scheduled.forEach(async (task) => {
      try {
        await new Worker(task) // this.worker(task);
      } catch (err) {
        this.err = err;
      } finally {
        this.inFlight -= 1;
      }

      if (this.pendingEntries.length > 0) {
        this.process();
      }
    });
  };

  wait = (options = {empty: true}) =>
  until(
      () => {
        if (this.err) {
          this.pendingEntries = [];
          throw this.err;
        }

        return {
          predicate: options.empty
            ? this.inFlight === 0 && this.pendingEntries.length === 0
            : this.concurrency > this.pendingEntries.length,
        };
      },
      {
        delay: 50,
      },
    );
}

export default Queue;