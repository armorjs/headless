import {ArmorBrowserRequestAdapter} from './adapter';
import {ArmorBrowserRequestAdapterInfo} from './adapter/info';
import {EventEmitter} from 'events';

export class ArmorBrowserRequestAdapters {
	public readonly adapters: {[k: string]: RequestAdapterInfo};
	public readonly events: EventEmitter;

	constructor(events: EventEmitter) {
		this.events = events;
		this.adapters = {};
	}

	public isRegistered(id: string): boolean {
		if (typeof id !== 'string' || !id) {
			return false;
		}

		if (!this.adapters) {
			return false;
		}

		return !!this.adapters[id.toLowerCase()];
	}

	public async register(id: string, filePath: string): Promise<ArmorBrowserRequestAdapters> {
		if (typeof id !== 'string') {
			throw new Error(
				'Headless Browser adapter registration failed - id argument missing or not a valid string.'
			);
		}

		if (id === '') {
			throw new Error('Headless Browser adapter registration failed - id argument cannot be an empty string.');
		}

		if (typeof filePath !== 'string') {
			throw new Error(
				'Headless Browser adapter registration failed - filePath argument missing or not a valid string.'
			);
		}

		if (filePath === '') {
			throw new Error(
				'Headless Browser adapter registration failed - filePath argument cannot be an empty string.'
			);
		}

		if (!this.adapters) {
			throw new Error(`Headless Browser adapter registration failed - adapter with id '${id}' already exists.`);
		}

		if (this.adapters[id]) {
			throw new Error(`Headless Browser adapter registration failed - adapter with id '${id}' already exists.`);
		}

		const adapter = new ArmorBrowserRequestAdapterInfo(id, filePath);
		await adapter.load();
		this.adapters[id] = adapter;
		return this;
	}

	public unregister(id: string): ArmorBrowserRequestAdapters {
		return this;
	}
}
