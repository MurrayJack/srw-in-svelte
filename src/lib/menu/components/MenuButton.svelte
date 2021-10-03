<script lang="ts">
    import type { Module } from "$lib/types";
	export let module: Module
</script>

<div>
    <a sveltekit:prefetch href={`/${module.id}/${module.subModules[0].id}`}>
        <div></div>
        <div>{module.caption}</div>
    </a>
</div>

<style>
    a {
        width: 80px;
        height: 80px;
        display: grid;
        text-align: center;
        cursor: pointer;
        color: #707378;
        text-decoration: none;
        position: relative;
        font-size: 11px;
    }
</style>