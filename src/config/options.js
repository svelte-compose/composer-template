import { defineComposerOptions } from '@svelte-compose/core';

export const options = defineComposerOptions({
    demoOption: {
        question: 'Do you want to use demo?',
        type: 'boolean',
        default: false,
    },
});
