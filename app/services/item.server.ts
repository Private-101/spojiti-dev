// import { type Authenticator } from "remix-auth";

export interface Item {
	id: string;
	label: string;
}

export interface ItemsService {
	getAllItems(): Promise<Item[]>;
	getItemById(id: string): Promise<Item | undefined>;
	createItem({ label }: { label: string }): Promise<string>;
	deleteItemById(id: string): Promise<void>;
}

export interface User {
	id: string;
}

/*export interface AuthService {
	authenticator: Authenticator<User>;
	getUser(request: Request): Promise<User | undefined>;
	requireUser(request: Request): Promise<User>;
	// setUser(request: Request, user: User): Promise<string>;
	destroySession(request: Request): Promise<string>;
}

declare global {
	var __MOCK_ITEMS__: Item[];
} */

export let MockItems = [
    {
        id: "1",
        label: "Item 1",
    },
    {
        id: "2",
        label: "Item 2",
    },
    {
        id: "3",
        label: "Item 3",
    },
];

	export async function getAllItems() {
		return MockItems;
	}
	export async function getItemById(id: string) {
		return MockItems.find((item) => item.id == id);
	}
	export async function createItem({ label }: { label: string }) {
		const id = String(Date.now());
		MockItems.push({
			id,
			label,
		});
		return id;
	}
	export async function deleteItemById(id: string) {
		MockItems = MockItems.filter(
			(item) => item.id != id
		);
	}
