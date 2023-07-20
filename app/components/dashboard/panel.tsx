import * as React from "react";
import { NavLink } from "@remix-run/react";

interface PanelProps {
    children: React.ReactNode;
    force?: boolean;
    index?: boolean;
    open?: boolean;
    size?: "sm";
}

export function Panel({
	children,
	force,
	index,
	open,
	size,
}: PanelProps) {
	let className = "bg-sp-primary-accent text-black flex flex-col overflow-y-auto";
	switch (size) {
		case "sm":
			className += " w-full";
			break;
		default:
			className += " flex-1";
			break;
	}
	if (force || open) {
		className += " flex z-20";
	}
	if (index) {
		className += " hidden";
	}
	return (
        <>
        <section className={className}>{children}</section>
        </>
    )
}

interface PanelHeaderProps {
    children: React.ReactNode;
}

export function PanelHeader({ children }: PanelHeaderProps) {
	return (
        <>
        <header className="bg-sp-primary sticky top-0 z-10 flex items-center p-4 border-b border-black text-black">
			{children}
		</header>
        </>
    )
}

interface PanelMainProps {
    children: React.ReactNode;
}

export function PanelMain({ children }: PanelMainProps) {
	return (
        <>
		<main className="flex-1 relative text-black">
			<div className="relative h-full">{children}</div>
		</main>
        </>
	);
}

interface PanelFooterProps {
    children: React.ReactNode;
}

export function PanelFooter({ children }: PanelFooterProps) {
	return (
        <>
		<main className="p-4 border-t border-black text-black">
			<div>{children}</div>
		</main>
        </>
	);
}

interface PanelItemLinkProps {
    children: React.ReactNode;
    to: string;
}

export function PanelItemLink({
	children,
	to,
}: PanelItemLinkProps) {
	return (
        <>
		<article className="block p-4 text-black hover:bg-black hover:text-white">
			<NavLink className={(isActive) => `block p-4 ${isActive && 'text-white bg-black'}`} to={to}>{children}</NavLink>
		</article>
        </>
	);
}


/*
convert all of the css in the following react code to tailwindcss: export function Panel({
	children,
	force,
	index,
	open,
	size,
}: {
	children: React.ReactNode;
	force?: boolean;
	index?: boolean;
	open?: boolean;
	size?: "sm";
}) {
	let className = "panel";
	switch (size) {
		case "sm":
			className += " panel--sm";
			break;
		default:
			className += " panel--full";
			break;
	}
	if (force) {
		className += " panel--force";
	}
	if (index) {
		className += " panel--index";
	}
	if (open) {
		className += " panel--open";
	}
	return <section className={className}>{children}</section>;
}

export function PanelHeader({ children }: { children: React.ReactNode }) {
	return <header className="panel__header">{children}</header>;
}

export function PanelMain({ children }: { children: React.ReactNode }) {
	return (
		<main className="panel__main">
			<div>{children}</div>
		</main>
	);
}

export function PanelFooter({ children }: { children: React.ReactNode }) {
	return (
		<main className="panel__footer">
			<div>{children}</div>
		</main>
	);
}

export function PanelItemLink({
	children,
	to,
}: {
	children: React.ReactNode;
	to: string;
}) {
	return (
		<article className="panel__list-item">
			<NavLink to={to}>{children}</NavLink>
		</article>
	);
}  and here is the css code: /* #region variables /
:root {
	--bg-hover: #1e1e1e;
	--bg-primary: #000;
	--text-primary: #fff;

	--z-sticky: 10;
	--z-menu: 20;
}

@media (prefers-color-scheme: light) {
	:root {
		--bg-hover: #f5f5f5;
		--bg-primary: #fff;
		--text-primary: #000;
	}
}
/* #endregion variables /

/* #region global /
* {
	box-sizing: border-box;
}

body {
	font-family: Inter, ui-sans-serif, system-ui, -apple-system,
		BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
		sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
		Noto Color Emoji;
	font-size: 20px;
	line-height: 32px;
	color: var(--text-primary);
	background-color: var(--bg-primary);

	padding: 0;
	margin: 0;

	height: 100vh;
	width: 100vw;

	display: flex;
}
a {
	color: var(--text-primary);
}
/* #endregion global /

/* #region utils /
.flex {
	display: flex;
}
.flex-1 {
	flex: 1;
}
.inline-flex {
	display: inline-flex;
}
.flex-center {
	align-items: center;
	justify-content: center;
}
.h-full {
	height: 100%;
}
.icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
.ml {
	margin-left: 1rem;
}
.mr {
	margin-right: 1rem;
}
.p {
	padding: 1rem;
}
.text-center {
	text-align: center;
}

@media only screen and (min-width: 1024px) {
	.lg\:hidden {
		display: none;
	}
}
@media only screen and (min-width: 1280px) {
	.xl\:hidden {
		display: none;
	}
}
/* #endregion utils /

/* #region panel /
.panel {
	background-color: var(--bg-primary);

	display: none;
	flex-direction: column;
	overflow-y: auto;
}
.panel:last-of-type {
	display: flex;
}
.panel--sm {
	width: 100%;
}
.panel--full {
	flex: 1;
}
.panel.panel--index {
	display: none;
}
.panel--open {
	display: flex;
	z-index: var(--z-menu);
}
.panel--force {
	display: flex;
}

.panel__header {
	background-color: var(--bg-primary);
	position: sticky;
	top: 0;
	z-index: var(--z-sticky);

	display: flex;
	align-items: center;

	padding: 1rem;
	border-bottom: 1px solid var(--text-primary);
}

.panel__main {
	flex: 1;
	position: relative;
}
.panel__main > div {
	position: relative;
	height: 100%;
}

.panel__footer {
	padding: 1rem;
	border-top: 1px solid var(--text-primary);
}

.panel__list-item > a {
	display: block;
	padding: 1rem;
}
.panel__list-item > a.active {
	background-color: var(--bg-hover);
	display: block;
	padding: 1rem;
}
.panel__list-item:hover {
	background-color: var(--bg-hover);
}

@media only screen and (max-width: 1024px) {
	.panel--open + .panel {
		display: none;
	}
}
@media only screen and (min-width: 1024px) {
	.panel {
		display: none;
		border-right: 1px solid var(--text-primary);
	}
	.panel:last-of-type:not(:first-of-type):not(.panel--sm) {
		border-right: none;
	}

	.panel:nth-last-of-type(2) {
		display: flex;
	}
	.panel--sm {
		max-width: 360px;
		width: 100%;
	}
	.panel.panel--index {
		display: flex;
	}
	.panel--open {
		display: flex;
		position: absolute;
		inset: 0;
	}
	.panel--open:is(.panel:nth-last-of-type(2)) {
		position: relative;
	}

	.panel__main {
		overflow-y: auto;
	}
}

@media only screen and (min-width: 1280px) {
	.panel:nth-last-of-type(3) {
		position: relative;
		display: flex;
	}
	.panel--open.panel:nth-last-of-type(3) {
		position: relative;
	}
}
/* #endregion panel /


The CSS to Tailwind CSS conversion is not straightforward. Tailwind is a utility-first CSS framework, where you apply pre-designed classes directly in your HTML or JSX. For complex or custom designs, it's sometimes necessary to write custom CSS or extend the functionality of Tailwind.
*/