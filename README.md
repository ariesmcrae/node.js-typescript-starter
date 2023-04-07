# node.js-typescript-starter

Node.js Typescript setup with vscode debugging

## Initial set up

- (optional) install nvm <https://github.com/nvm-sh/nvm>. issue command: `nvm use`. This will force you to switch to the version of node.js in `.nvmrc`. If you don't have it installed, nvm will remind you.

- issue command: `npm i`

## Run in production

`npm start`

## Run locally

Step 1: `SHIFT+COMMAND+P` (in macOS) -> `Tasks: Configure Default Build Task` -> `tsc: watch`

Step 2: `SHIFT+COMMAND+P` (in macOS) -> `Tasks: Run Build Task`

Step 3: `SHIFT+COMMAND+D` for vscode debug, then press the `green play (Launch) button`. Watch the output from the `Debug Console` tab.

Step 4: Modify the code

Step 5: Press the play button again and watch the output from the `Debug Console` tab.
