# Features of this starter project

- [nvm](https://github.com/nvm-sh/nvm): ability to switch to the specific version of node.js via `.nvmrc` file

- [husky](https://github.com/typicode/husky) pre-commit hooks

- typescript with sourcemap, generated by the command: `tsc --init --sourceMap --rootDir src --outDir dist`. You'll have the ability to map the compiled javascript to typescript

- no more need for `ts-node-dev` for watching your file changes while you develop. We're now using native typescript in `.vscode/tasks.json`. Just do `SHIFT+COMMAND+P` (in macOS) -> `Tasks: Run Build Task`, then `SHIFT+COMMAND+D` for vscode debug.
