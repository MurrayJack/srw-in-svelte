/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Modules {
	availableModules: Module[];
}

export type Module = {
	caption: string;
	id: string;
	subModules: {
		name: string;
		id: string;
	}[];
};
