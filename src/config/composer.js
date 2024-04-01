import { defineComposerConfig, categories } from '@svelte-compose/core';
import { options } from './options.js';

export const composer = defineComposerConfig({
    metadata: {
        id: 'composer-template',
        package: 'composer-template',
        version: '1.0.0',
        name: 'Composer Template',
        description: 'This a composer demo template',
        category: categories.styling,
        environments: { kit: true, svelte: true },
    },
    options,
    packages: [],
    files: [
        {
            name: () => 'asd.svelte',
            contentType: 'svelte',
            content: ({ js }) => {
                js.imports.addEmpty(js.ast, './app.scss');
            },
        },
    ],
});
