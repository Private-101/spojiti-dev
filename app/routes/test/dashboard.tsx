import { Link, Outlet, useLocation, useSearchParams } from "@remix-run/react";

import {
	Panel,
	PanelFooter,
	PanelHeader,
	PanelItemLink,
	PanelMain,
} from "~/components/dashboard/panel";

import iconsHref from "~/components/sprites.svg";

export default function Menu() {
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const forceShow = location.pathname === "/dashboard";
	if (forceShow) {
		
	}
	const panelOpen = searchParams.get("open") === "menu";

	return (
		<>
			<Panel size="sm" force={forceShow} open={panelOpen}>
				<PanelHeader>
					<span className="flex-1">Menu</span>
					{forceShow ? null : (
						<Link to={location.pathname} className="icon ml-4 xl:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={20} width={20}>
							<use href={iconsHref + "#close"} />
								</svg>
						</Link>
					)}
				</PanelHeader>
				<PanelMain>
					<PanelItemLink to="items">Items</PanelItemLink>
				</PanelMain>
				<PanelFooter>Footer</PanelFooter>
			</Panel>
			<Outlet />
		</>
	);
}