import * as React from "react";
import { useFetcher } from "@remix-run/react";
import styles from "../styles/home.styles.css";
import { allergyFilter, type Menu as IMenu } from "../alleryFilterFunc";
import { useState, useEffect, useRef } from "react";
import MenuItem from "../src/MenuItem";
import Menu from "../src/Menu";
import Checkbox from "../src/Checkbox";
import { allergens, type IAllergen } from "../data/allergens";

// TODO:
// [] - Fix Styling (Draw out how u want it, remove all classes and start over.)
// [] - Define all types
// [] - Build README Documentation on how to build for restaurants and input the xlsx
// [] - Deploy

// to run local server type npm run dev

interface FetcherData {
    data: {
        dishName: string;
        course: string;
        integral: string[];
        removable: string[];
        price: string;
    }[]
};

interface CheckData {
    [key: string]: boolean
}

export default function HomePageExample() {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [checkedItems, setCheckedItems] = useState<CheckData>({});
    const checkboxRef = useRef<HTMLInputElement | null>(null);
        /*const defaultMenu = allergens.forEach(item => {
          
          return {item}
        });*/
  /*const [checkedItems, setCheckedItems] = useState<Set<IAllergen[]> | null>((...args: Array<IAllergen[]>) => {
    const arr = new Array(...args);
    return new Set(arr);
  });*/

  const [menuData, setMenuData] = useState<IMenu[]>([])
  /*
  const handlChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(c => {return {...c, [event.target.value]: event.target.checked}});
  }, []) */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // new Set(Array.from([checkedItems, [event.target.value]: event.target.checked]))
    // const arr = Array.from(checkedItems ?? []);
    // arr.push()
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });
  };

  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };
  
  const apiFetcher = useFetcher<FetcherData>();
  
   // "init" | "actionRedirect" | "actionSubmission" | "loaderSubmission" | "actionReload" | "normalLoad" | "done"
   // apiFetcher.type

   // (property) state: "idle" | "loading" | "submitting"
   if (apiFetcher.state !== "idle") {
    // setLoading(true);
   };
   

   if (loading) {
    // TODO: replace with spinner
    return <div>loading...</div>
   };

   if (error) {
    // setLoading(false);
    return <div>failed to load</div>;
   };
  
/*
  const usersDiet = allergens
    .map((ingredient) => checkedItems[ingredient.name] && ingredient.name)
    .filter((ingredients) => ingredients && ingredients);
*/
// const usersDiet = allergens
  // const usersDiet = allergens.map((allergen) => checkedItems
  // .filter((item) => item.name === allergen.name ? allergen.name : undefined))
  // .filter((ingredient) => Boolean(ingredient) && ingredient.name);

    // .map((ingredient) => checkedItems)
    // .filter((ingredients) => ingredients && ingredients);
  // usersDiet.push(optionValue);
  if (!apiFetcher.data || !apiFetcher.data.data) {
    // setLoading(true);
    apiFetcher.load('/api/hard-data.loader');
};
// TODO: fix this hack
if (apiFetcher.data && typeof apiFetcher.data.data[0].dishName === 'string') {
    // TODO: just map checkedItems, since all allergens are set as the initialState?
    const usersDiet = allergens
.filter((ingredient, i) => checkedItems[i] === true && ingredient.key)
.map((ingredient) => ingredient.key);
    const filteredMenu = allergyFilter(apiFetcher.data.data, usersDiet);
    setMenuData(filteredMenu);
    // setLoading(false);
};

    const courses = ["Snacks", "Small", "Main", "Side", "Dessert"];
    const menuItems = courses.map((course) => {
        const courses = menuData // item.course === `${course}`
          .filter((item) => item.course === course)
          .map((item) => (
            <MenuItem
              key={Math.random()}
              dishName={item.dishName}
              price={item.price}
            />
          ));
        return courses;
      });
  
  return (
    <div className={"main"}>
      <h1>Interactive Diet Menu</h1>
      <Menu
        snacks={menuItems[0]}
        small={menuItems[1]}
        main={menuItems[2]}
        sides={menuItems[3]}
        desserts={menuItems[4]}
      >
        <section className={"controller"}>
          <div className={"selectList"}>
            <select
              defaultValue=" "
              name="selectList"
              id="selectList"
              onChange={handleSelect}
            >
              <option value=" ">-- Choose Diet --</option> {" "}
              <option value=" ">No Diet</option> {" "}
              <option value="Veg">Vegetarian</option> {" "}
              <option value="Vegan">Vegan</option>
              <option value="Pesc">Pescatarian</option>
            </select>
          </div>
          {/* <div className={"checkboxContainer"}> */}
          {/* <div className={"checkboxItems"}> */}
          <fieldset className={"group"}>
            <legend>Select any of the 14 allergens</legend>
            <ul className={"checkbox"}>
              {allergens.map((item, i) => (
                <li key={item.key}>
                  <label className={"checkboxLabel"} key={item.key}>
                    <Checkbox
                    ref={checkboxRef}
                      name={item.name}
                      type={'checkbox'}
                      // type={'checkbox'}
                      checked={checkedItems[i] ? true : false}
                      onChange={handleChange}
                    />
                    {item.key}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
          {/* </div> */}
          {/* </div> */}
        </section>
      </Menu>
    </div>
  );
};

// export default Home;