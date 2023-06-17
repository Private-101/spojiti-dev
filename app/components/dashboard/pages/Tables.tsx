import Breadcrumb from '~/components/common/Breadcrumb';
import TableOne from '~/components/examples/TableOne';
import TableThree from '~/components/examples/TableThree';
import TableTwo from '~/components/examples/TableTwo';
import DefaultLayout from '~/components/dashboard/DashboardLayout'; 

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;