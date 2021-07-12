# react-component-template

Quickly degit a modern [for now] react component template that is publish-ready with a gh-pages deployable example.

> Inspired by [svelte-component-template](https://github.com/sveltejs/component-template) and [create-react-library](https://github.com/transitive-bullshit/create-react-library).

## Getting started

> Replace `yarn` commands with whatever the equivalent is in your package manager.

### 0. Clone

You can use GitHub's "Use this template" button or clone the project manually:

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

### 2. Rollup Options can be found at https://github.com/developit/microbundle#readme

The defaults are set to work with the latest version of React (v17+) at time of writing.

## Workflow

```bash
yarn start
```

Then, open a new terminal tab your project directory:

```bash
cd example
yarn start
```

You should be able to change `src/index.tsx` and see your example hot reload.

### Test setup

Tests are run via `react-scripts` from CRA.
You can [customize the config as documented](https://create-react-app.dev/docs/running-tests/#initializing-test-environment).

### Deploy `./example` to `gh-pages`

In the root of your project, run:

```bash
yarn deploy
```

## License

MIT © [JaKXz](https://github.com/JaKXz)
