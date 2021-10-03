<script context="module" lang="ts">
	// import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';
	
	export const load: Load = async ({ fetch }) => {
		try {
			const res = await fetch('/api/moduleMenu.json');
	
			if (res.ok) {
				const modules = await res.json();

				return {
					props: { modules }
				};
			}

			const { message } = await res.json();

			return {
				error: new Error(message)
			};
		} catch (error) {
			console.error(error)			
		}

	};
</script>

<script lang="ts">
	import type { Modules } from '$lib/types';
	export let modules: Modules;

	import Header from "../lib/header/Header.svelte"
	import ModuleMenu from "../lib/menu/Menu.svelte"
	import SubMenu from "../lib/menu/SubMenu.svelte"
	import "../app.css"
</script>

<main>
	<header>
		<Header />
	</header>
	
	<aside>
		<ModuleMenu modules={modules} />
	</aside>

	<section>
		<SubMenu modules={modules}/>
		<slot />
	</section>
</main>

<style>
	main {
		min-height: 100vh;
		min-width: 100vw;
		display: grid;
		grid-template-areas: 'header header' 'aside section';
		grid-template-rows: 50px 1fr;
		grid-template-columns: 80px 1fr;
	}

	header {
		grid-area: header;
		background: var(--color-blue-b60);
		color: white;
		display:grid;
		align-items: center;
	}

	aside {
		grid-area: aside;
		background: var(--color-grey-g90);
		color: white;
	}

	section {
		grid-area: section;
	}
</style>
