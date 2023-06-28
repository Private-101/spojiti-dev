import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node";
import data from '~/experimental/interactive-menu/data/hardData';


// TODO: // YOU COULD MAKE A HANDLER FOR POST THAT ALLOWS THE RESTAURANT TO POST A NEW MENU AND DELETE THE OLD ONE  

interface LoaderData {
    data: {
        dishName: string;
        course: string;
        integral: string[];
        removable: string[];
        price: string;
    }[]
}
export const loader = ({request}: LoaderArgs) => {
    // console.log(JSON.stringify(data));

    return json<LoaderData>({data})
};



