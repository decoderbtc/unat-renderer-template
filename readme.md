# unat-renderer-template

This repository provides the starting point to build, test and deploy your very own Unique Non-Arbitrary Token (UNAT) rendering inscription.

It provides a [Vite](https://vitejs.dev/) based development environment, testing framework and the scaffolding code required to make creating non-arbitrary content using Bitcoin data as simple as possible.

# Getting started

Clone this repository and install the dependencies.

```
git clone https://github.com/decoderbtc/unat-renderer-template.git my-project-name
cd my-project-name
npm install
```

Start the development server.

```
npm start
```

Navigate to the URL provided.

# Development

Examples of different ways to render content can be found in the `examples` directory. The default example used is the `simple` renderer. Rendering examples can be switched by changing the `VITE_RENDERER` environment variable.

The `src/main.ts` folder contains logic to either read the value entered in the input field or use the inscription id injected by marketplaces to interpret the block number minted.

# Testing

Each example has accompanying tests to provide examples on how to test your renderer.

Run the tests with `npm test`.

# Environment variables

The environment variable files are, unusually, committed into source controls. This is because the production environment variables should not be adjusted. See the inline comments for further details on this approach.

# Deploying/inscribing

Build your inscription with `npm run build`. This will generate a single `index.html` file in the `build` directory.

Inscribe this file and reference it via the `id` field in your non-arbitrary token deployment.

# License

MIT
