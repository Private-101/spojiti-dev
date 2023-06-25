import styles from "../../styles/home.styles.css";
import Select from 'react-select';

interface MenuProps {
  key: string;
  children: JSX.Element;
  category: MenuOption | null;
  jobs: JSX.Element[];
};

interface MenuOption {
  [key: string]: string
    // value: string;
    // label: string;
};

const Menu = (props: MenuProps) => {
  return (
    <section className={'reactiveMenu'} key={props.key}>
      {props.children}
      {props.category ? (
        <h3>Available Jobs for {props.category.label}:</h3>
      ) : (
        <h3>Available Jobs:</h3>
      )}
      {props.jobs}
    </section>
  );
};

export default Menu