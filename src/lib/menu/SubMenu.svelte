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

</style>