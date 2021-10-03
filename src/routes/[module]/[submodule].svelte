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

<div>loader...</div>

<div>{data.module}</div>
<div>{data.submodule}</div>