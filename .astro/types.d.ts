declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"books": {
"fav-books.md": {
	id: "fav-books.md";
  slug: "fav-books";
  body: string;
  collection: "books";
  data: any
} & { render(): Render[".md"] };
};
"contact": {
"1-github.md": {
	id: "1-github.md";
  slug: "1-github";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
"2-linkedin.md": {
	id: "2-linkedin.md";
  slug: "2-linkedin";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
"3-devpost.md": {
	id: "3-devpost.md";
  slug: "3-devpost";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
"4-resume.md": {
	id: "4-resume.md";
  slug: "4-resume";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
"5-email.md": {
	id: "5-email.md";
  slug: "5-email";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
};
"education": {
"education-1-sjsu.md": {
	id: "education-1-sjsu.md";
  slug: "education-1-sjsu";
  body: string;
  collection: "education";
  data: any
} & { render(): Render[".md"] };
};
"jobs": {
"job-1-genpact.md": {
	id: "job-1-genpact.md";
  slug: "job-1-genpact";
  body: string;
  collection: "jobs";
  data: any
} & { render(): Render[".md"] };
"job-1.5-progressive-victory.md": {
	id: "job-1.5-progressive-victory.md";
  slug: "job-15-progressive-victory";
  body: string;
  collection: "jobs";
  data: any
} & { render(): Render[".md"] };
"job-2-cdk-associate.md": {
	id: "job-2-cdk-associate.md";
  slug: "job-2-cdk-associate";
  body: string;
  collection: "jobs";
  data: any
} & { render(): Render[".md"] };
"job-3-cdk-intern.md": {
	id: "job-3-cdk-intern.md";
  slug: "job-3-cdk-intern";
  body: string;
  collection: "jobs";
  data: any
} & { render(): Render[".md"] };
};
"projects": {
"project-1-gone-with-the-fire.md": {
	id: "project-1-gone-with-the-fire.md";
  slug: "project-1-gone-with-the-fire";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"project-2-smart-flask.md": {
	id: "project-2-smart-flask.md";
  slug: "project-2-smart-flask";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"project-3-clever-pedal.md": {
	id: "project-3-clever-pedal.md";
  slug: "project-3-clever-pedal";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"project-4-smart-tractor.md": {
	id: "project-4-smart-tractor.md";
  slug: "project-4-smart-tractor";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"project-5-smart-clamp.md": {
	id: "project-5-smart-clamp.md";
  slug: "project-5-smart-clamp";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
"project-6-web-serial.md": {
	id: "project-6-web-serial.md";
  slug: "project-6-web-serial";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
