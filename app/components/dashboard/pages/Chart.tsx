import Breadcrumb from '~/components/common/Breadcrumb';
import ChartFour from '~/components/examples/ChartFour';
import ChartOne from '~/components/examples/ChartOne';
import ChartThree from '~/components/examples/ChartThree';
import ChartTwo from '~/components/examples/ChartTwo';
import DefaultLayout from '~/components/dashboard/DashboardLayout'; 

const Chart = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DefaultLayout>
  );
};

export default Chart;