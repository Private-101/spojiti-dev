import { Link, Outlet, useParams } from "@remix-run/react";

import { Panel, PanelHeader, PanelMain } from "~/components/dashboard/panel";

import iconsHref from "~/icons.svg";

export default function List() {
	const { itemId } = useParams();

	return (
		<>
			<Panel>
				<PanelHeader>
					<Link to=".." className="icon mr">
						
							
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={20} width={20}>
                                {/*<use href={iconsHref + "#back"} />*/}
  <path fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
						
					</Link>
					Item {itemId}
				</PanelHeader>
				<PanelMain>
					<div className="h-full flex flex-center">
						<h1>Item {itemId}</h1>
					</div>
				</PanelMain>
			</Panel>
			<Outlet />
		</>
	);
}