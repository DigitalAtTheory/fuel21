import { writable } from 'svelte/store';

const issueData = [
	{
		name: 'Issue 1',
		slug: `issue-1`,
		issue: `../src/assets/FUEL-2021-JANUARY-DESKTOP-HANDOFF.jpg`
	},
	{
		name: 'Issue 2',
		slug: `issue-2`,
		issue: `../src/assets/FUEL-FEB-2021-DESKTOP-HANDOFF.jpg`
	},
	{
		name: 'Issue 3',
		slug: `issue-3`,
		issue: `../src/assets/FUEL-MARCH-2021-DESKTOP.jpg`
	},
	{
		name: 'Issue 4',
		slug: `issue-4`,
		issue: `../src/assets/FUEL-APRIL-2021-HANDOFF-DESKTOP.jpg`
	},
	{
		name: 'Issue 5',
		slug: `issue-5`,
		issue: `../src/assets/2021-FUEL-MAY-HANDOFF-DESKTOP.jpg`
	}
];

export const issues = writable(issueData);
