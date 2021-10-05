<script lang="ts">
    import type { Modules } from "$lib/types";
    export let modules: Modules;
</script>

<div>
    <ul>
        {#each modules.availableModules[0].subModules as module}
            <li>
                <a sveltekit:prefetch href={`/${module.id}/${module.name}`}>{module.name}</a>			
            </li>
        {/each}
    </ul>
</div>

<style>
    div {
        height: 40px;
        border-bottom: 1px solid var(--color-grey-g30);
        background-color: #fff;
        display: inline-flex;
        flex-direction: row;
        width: 100%;
    }
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        font-family: Roboto,Arial,Helvetica,sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
        letter-spacing: .02em;
        color: var(--color-grey-g80);
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0 15px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        text-align: center;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
    }
</style>