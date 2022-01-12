# react-component-template

Quickly degit a modern [for now] React component that is _publish-ready in one step_ with a gh-pages deployable example that has [profiling](https://reactjs.org/docs/profiler.html) [enabled by default](https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977).

> Inspired by [svelte-component-template](https://github.com/sveltejs/component-template) and [create-react-library](https://github.com/transitive-bullshit/create-react-library).

## Getting started

> Replace `yarn` commands with your package manager's equivalent.

### 0. Clone

Use GitHub's "Use this template" button or clone the project manually:

```bash
npx degit jakxz/react-component-template <project-name>

cd project-name

git init
yarn install
cd example
yarn install
```

### 1. Name your package

Do a find and replace for `react-component-template` and replace all instances with the name that you want :)
this keeps the template lean, removing the need for any additional scripting.
You are now able to publish your package to npm! :tada:
For "a better `npm publish`", try [`np`](https://npm.im/np).

### 2. `rollup` options can be found at https://github.com/developit/microbundle#readme

The defaults are set to work with the latest version of React (v17 at time of writing) and should suffice for most projects.

The React peer dependency [for consumers] is set by default to >=16.8, assuming the use of React hooks.

## Workflow

```bash
yarn start
```

Then, open a new terminal tab in your project directory:

```bash
cd example
yarn
yarn start
```

You should be able to change files in src that are used in your example, e.g. `./src/index.tsx` and see your example hot reload.

### `yarn test` / setup

Tests are run via `react-scripts` from CRA.
You can [customize the config as documented](https://create-react-app.dev/docs/running-tests/#initializing-test-environment).

Tip: run tests without watch mode with `yarn test --watchAll=false`.

### Deploy `./example` to `gh-pages`

In the root of your project, run:

```bash
yarn deploy
```

The example is just a standard (pre-ejected) CRA app whose dependencies are linked to the root folder (your React component).
If you are adding more dependencies that will be shared with both the example & the React component, add them to the root `package.json` follow the `link:../node_modules/<dep>` pattern in `./example/package.json`.

## License

MIT © [JaKXz](https://github.com/JaKXz)
