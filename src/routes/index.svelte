<script>
	import { issues } from '../stores/mainStore';
	let mostRecentIssue = $issues.length - 1;
</script>

<div class="p-4">
	<img class="mx-auto" src={$issues[mostRecentIssue].issue} alt={$issues[mostRecentIssue].name} />
</div>
