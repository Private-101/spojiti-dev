import React from "react";
import CustomSorter from "~/components/experimental/CustomSorter";
import CustomFilter from "~/components/experimental/CustomFilter";
import CustomSearchInput from "~/components/experimental/CustomSearchInput";
import { DisplayCard } from "~/components/experimental/DisplayCard";
import type { IUserCardProps } from '~/temp/dev/types';
import { generateUserCard } from '~/experimental/pages/page.data';

export default function FiltersRoute() {
    const [userData, setUserData] = React.useState<IUserCardProps[] | null>(null);
    React.useEffect(() => {
        if (!userData) {
            let data = Array.from({ length: 3 }).map((_, i) => generateUserCard());
            setUserData(data)
            // const { id, name, avatar, positions, skills } = generateUserCard();
        }
    }, [userData]);

    const memoizedUserData = React.useMemo(() => userData, [userData]);

    if (!memoizedUserData) {
        return <>Loading...</>
    };

  return (
    <div className="container mx-auto my-2">
      <section className="min-h-screen overflow-auto">
      <div className="my-3">
        <i>
          From the blog post{" "}
          <a href="https://chrisfrewin.com/blog/extending-react-types-for-children-as-a-function/">
            "Extending React Standard Types to Allow for Children as a Function"
          </a>
          .
        </i>
      </div>
      <CustomSearchInput<IUserCardProps>
        data={memoizedUserData}
        propertiesToSearchOn={["category", "name"]}
      >
        {(display) => (
            <div key={`search-${display.id}`} className="max-w-fit border-b border-solid cursor-pointer border-sp-primary/30 rounded-md hover:border-2 hover:border-sp-primary hover:shadow-md">
            <DisplayCard {...display} />
        </div>
          )}
      </CustomSearchInput>
      </section>
       {/** <h3>Results:</h3> <DisplayCard key={`sort-${display.id}`} {...display} /> */}
      {/*<div className="row">
        <CustomSorter<IUserCardProps> data={memoizedUserData} defaultProperty="category">
          {(display) => (
            <div key={`sorted-${display.id}`} className="max-w-fit border-b border-solid cursor-pointer border-sp-primary/30 rounded-md hover:border-2 hover:border-sp-primary hover:shadow-md">
            <DisplayCard key={`sorted-display-${display.id}`} {...display} />
        </div>
          )}
        </CustomSorter>
          </div>*/}
      {/*<div className="row">
        <CustomFilter<IUserCardProps> data={memoizedUserData}>
          {(display) => (
            <div key={`filtered-${display.id}`} className="max-w-fit border-b border-solid cursor-pointer border-sp-primary/30 rounded-md hover:border-2 hover:border-sp-primary hover:shadow-md">
            <DisplayCard key={`filtered-display-${display.id}`} {...display} />
        </div>
          )}
        </CustomFilter>
          </div>*/}
    </div>
  );
}