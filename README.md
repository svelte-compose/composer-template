# composer-template

This is a composer template for an external composer. External composers are not intended to be published within the `@svelte-compose` organization. Thus this external composers will not appear on the `svelte-compose` website.

## IMPORTANT

This template is only updated from time to time and might not use the latest versions. Therefore be aware that updating the versions inside of this template might break your code.

## Converting to an first party composer

If you decide that this composer should become first party, there a few minor things to do.

-   Create a PR against the main repository adding those files.
-   Make sure to adapt the file layout to the layout presented inside the main repository. Mainly:
    -   Move the folders from the `src/` directory to the parent directory.
    -   Delete the following files: `jsconfig.json`, `pnpm-lock.yml`, `test.js`
-   Update the package name inside `package.json` to match the following pattern: `@svelte-compose/{tool}`
