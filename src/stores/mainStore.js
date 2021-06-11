import { writable } from 'svelte/store';

const issueData = [
	{
		name: 'Issue 1',
		slug: `issue-1`,
		issue: `https://res.cloudinary.com/joshsuson/image/upload/v1623437139/Fuel%2021/FUEL-2021-JANUARY-DESKTOP-HANDOFF_bxgqlf.jpg`
	},
	{
		name: 'Issue 2',
		slug: `issue-2`,
		issue: `https://res.cloudinary.com/joshsuson/image/upload/v1623437139/Fuel%2021/FUEL-FEB-2021-DESKTOP-HANDOFF_uget4j.jpg`
	},
	{
		name: 'Issue 3',
		slug: `issue-3`,
		issue: `https://res.cloudinary.com/joshsuson/image/upload/v1623437139/Fuel%2021/FUEL-MARCH-2021-DESKTOP_g5vqxg.jpg`
	},
	{
		name: 'Issue 4',
		slug: `issue-4`,
		issue: `https://res.cloudinary.com/joshsuson/image/upload/v1623437139/Fuel%2021/FUEL-APRIL-2021-HANDOFF-DESKTOP_nayp15.jpg`
	},
	{
		name: 'Issue 5',
		slug: `issue-5`,
		issue: `https://res.cloudinary.com/joshsuson/image/upload/v1623437139/Fuel%2021/2021-FUEL-MAY-HANDOFF-DESKTOP_srkmih.jpg`
	}
];

export const issues = writable(issueData);
