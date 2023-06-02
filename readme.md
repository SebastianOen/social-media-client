social-media-client

Eslint, Cypress, Jest, Husky and Prettier are in the dependencies

Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Slash commands
Leave a comment
Ingen fil valgt
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported

Husky runs on git commit

Scripts for individual tests:

Jest: $npm test

Cypress: $npm run test-e2e
$npm run test-e2e-cli

Eslint: $npx lint-staged

Prettier: $npm run format

Tests that are already made with cypress:

1. Checking if token in localstorage is deleted on logout
2. Checking for error message when loging in with invalid credentials
3. Checking the user can log in and access their profile

(mock localstorage is also included for tests)

Merging:
When merging it needs one peer review and has to pass all tests.
