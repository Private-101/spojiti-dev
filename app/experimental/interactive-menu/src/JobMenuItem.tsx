import styles from '../styles/home.styles.css';
import type { JobPost } from '~/models/job.server';

type MenuItemProps = {
  [K in keyof JobPost]?: string;
} & {
  categoryId?: string
}

function MenuItem(props: MenuItemProps) {

  return (
    <div className={'menu'}  key={Math.random()}>
      <p className={'dishName'}>{props.title}</p>
      <p>Salary Range:</p>
      <p>Min: ${props.salary_range_min}</p>
      <p>Max: ${props.salary_range_max}</p>
    </div>
  );
}
export default MenuItem;