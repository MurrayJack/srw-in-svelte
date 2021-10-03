<script context="module" lang="ts">
</script>

<script lang="ts">
	import MenuButton from './components/MenuButton.svelte';
	import type { Modules } from '$lib/types';
	export let modules: Modules;
</script>

<nav>
	<ul>
		{#each modules.availableModules as module}
			<li>
				<MenuButton {module} />
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding: 0;
	}

	ul {
		padding:0;
		margin:0;
		list-style: none;
	}

	li {
		padding: 0;
		box-sizing: border-box;
	}
</style>
