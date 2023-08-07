import sleep from './sleep';

interface UntilOptions {
    delay: number;
    tries: number;
};

const defaultOptions: UntilOptions = {
    delay: 5e3,
    tries: -1
};

type UnitlReturnType = Promise<{ predicate: boolean, result?: any }>;

export default async function until(test: () => UnitlReturnType, options: UntilOptions = defaultOptions) {
  const { delay, tries } = options;
  const { predicate, result } = await test();

  if (predicate) {
    return result;
  }

  if (tries - 1 === 0) {
    throw new Error('tries limit reached');
  }

  await sleep(delay);
  return until(test, { ...options, tries: tries > 0 ? tries - 1 : tries });
}