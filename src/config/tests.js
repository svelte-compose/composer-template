import { defineComposerTests } from '@svelte-compose/core';
import { options } from './options.js';

export const tests = defineComposerTests({
    files: [],
    options,
    optionValues: [{ demoOption: true }],
    tests: [],
});
