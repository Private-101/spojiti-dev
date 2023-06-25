import styles from '../styles/home.styles.css';
import type { JobPost } from '~/models/job.server';

type MenuItemProps = {
  [K in keyof JobPost]?: string;
}


/*
type MenuItemProps = {
  [K in keyof JobPost]: JobPost[K]
}

interface MenuItemProps {
  dishName: string;
  price: string;
};
*/

function MenuItem(props: MenuItemProps) {

  return (
    <div className={'menu'}>
      <p className={'dishName'}>{props.title}</p>
      <p>Salary Range:</p>
      <p>Min: ${props.salary_range_min}</p>
      <p>Max: ${props.salary_range_max}</p>
    </div>
  );
}
export default MenuItem;