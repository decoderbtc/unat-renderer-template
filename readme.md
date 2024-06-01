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

The `render` method in `src/renderer.ts` is your entry point to development. From here you can use the block number from a mint inscriptions or the manual input field to power your UNAT.

The inline comments in `src/renderer.ts`, `src/main.ts`, `.env` & `.env.production` aim to give an insight into what is going on under the hood.

# Testing

Test your render method in `src/renderer.test.ts`.

Run the tests with `npm test`.

# Environment variables

The environment variable files are, unusually, committed into source controls. This is because the production environment variables should not be adjusted. See the inline comments for further details on this approach.

# Deploying/inscribing

Build your inscription with `npm run build`. This will generate a single `index.html` file in the `build` directory.

Inscribe this file and reference it via the `id` field in your non-arbitrary token deployment.

# License

MIT
