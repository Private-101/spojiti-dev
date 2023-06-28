import styles from "../../styles/home.styles.css";
import Select from 'react-select';


interface MenuProps {
  key: string;
  children: JSX.Element;
  snacks: JSX.Element[];
  small: JSX.Element[];
  main: JSX.Element[];
  sides: JSX.Element[];
  desserts: JSX.Element[];
};

const Menu = (props: MenuProps) => {
  return (
    <section className={'reactiveMenu'} key={props.key}>
      {props.children}
      <h3>Snacks</h3>
      {props.snacks}
      <h3>Small Plates</h3>
      {props.small}
      <h3>Main Course</h3>
      {props.main}
      <h3>Sides</h3>
      {props.sides}
      <h3>Dessert</h3>
      {props.desserts}
    </section>
  );
};

export default Menu
