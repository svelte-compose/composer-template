import { remoteControl } from '@svelte-compose/core/internal';
import { testComposer } from '@svelte-compose/testing-library';

remoteControl.enable();
/** @type {import('@svelte-compose/core/composer/config').ComposerWithoutExplicitArgs} */
const composer = /** @type {any} */ (await import('./index.js')).default;
remoteControl.disable();

testComposer(composer, {
    outputDirectory: './.outputs',
    headless: true,
    pauseExecutionAfterBrowser: false,
});
