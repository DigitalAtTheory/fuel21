<script context="module">
	export async function load({ page }) {
		const slug = page.params.slug;
		return { props: { slug } };
	}
</script>

<script>
	import { issues } from '../stores/mainStore';
	export let slug;
	let currentIssue;

	$: {
		currentIssue = $issues.find((issue) => issue.slug === slug);
	}
</script>

<svlete:head>
	<title>{currentIssue.name}</title>
</svlete:head>
<div class="p-4">
	<img class="mx-auto" src={currentIssue.issue} alt={currentIssue.name} />
</div>
