import type { RequestHandler } from '@sveltejs/kit';
import type { Modules } from '$lib/types';

export const get: RequestHandler<Modules> = async () => {
	return {
		body: {
			initialModule: {
				module: 'dashboard',
				subModule: 'dash1'
			},

			availableModules: [
				{
					caption: 'Dashboard',
					id: 'dashboard',
					subModules: [
						{
							name: 'dash1',
							id: 'dash1'
						}
					]
				},
				{
					caption: 'Main',
					id: 'main',
					subModules: [
						{
							name: 'Entries',
							id: 'people'
						},
						{
							name: 'Entries (Legacy)',
							id: 'entries'
						},
						{
							name: 'Occupancy Graph',
							id: 'oograph'
						},
						{
							name: 'Auto Allocate',
							id: 'autoallocate'
						}
					]
				},
				{
					caption: 'Tools',
					id: 'tools',
					subModules: [
						{
							name: 'dash1',
							id: 'dash1'
						}
					]
				}
			]
		}
	};
};
