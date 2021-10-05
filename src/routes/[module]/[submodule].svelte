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

<article>
    <div>loader...</div>

    <div>{data.module}</div>
    <div>{data.submodule}</div>
</article>

<style>
    article {
        padding: 16px;
    }
</style>