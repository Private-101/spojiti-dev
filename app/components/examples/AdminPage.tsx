import CardFour from '~/components/examples/CardFour';
import CardOne from '~/components/examples/CardOne';
import CardThree from '~/components/examples/CardThree';
import CardTwo from '~/components/examples/CardTwo';
import ChartOne from '~/components/examples/ChartOne';
import ChartThree from '~/components/examples/ChartThree';
import ChartTwo from '~/components/examples/ChartTwo';
import ChatCard from '~/components/examples/ChatCard';
import MapOne from '~/components/examples/MapOne';
import TableOne from '~/components/examples/TableOne';
import DefaultLayout from '~/components/dashboard/DashboardLayout'; 

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;