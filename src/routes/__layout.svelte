<script>
	import { issues } from '../stores/mainStore';
</script>

<div class="p-8 max-w-5xl mx-auto divide-y divide-gray-300">
	<nav class="pb-2 w-full flex justify-center">
		{#each $issues as issue}
			<a
				class="uppercase px-3 py-2 border-b-2 border-gray-200 bg-gray-200 mr-2 hover:border-b-2 hover:border-gray-400"
				href={`/${issue.slug}`}>{issue.name}</a
			>
		{/each}
	</nav>
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
