import styles from '../styles/home.styles.css';

interface MenuItemProps {
  dishName: string;
  price: string;
};


function MenuItem(props: MenuItemProps) {

  return (
    <div className={'menu'}>
      <p className={'dishName'}>{props.dishName}</p>
      <p>${props.price}</p>
    </div>
  );
}
export default MenuItem;