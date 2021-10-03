<script context="module" lang="ts">
	export async function load({ page }) {
        return {
            props: { data: page.params }
        }
	}
</script>

<script lang="ts">
    export let data: any
</script>

<h1>{data.module}</h1>


<slot />