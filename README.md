# idai-components

Components library for use in other angular based dai projects. 

## Demo application and usage documentation

A sample application can get started via

```bash
npm install && npm run build && npm start
```

The demo app is then served on port `8084`. 
It documents and shows the libraries facilities in action.

Changes to partials and js files of the library under `src` as well as of the
demo application files under `demo` will automatically trigger a
rebuild and also a reload in active browser windows.

## Building the library

Running `npm run build` will perform all the 
necessary build steps which creates the following files:

```bash
dist/idai-components.js          # full js library without depencies
dist/idai-components.min.js     # minified full js library without dependencies
dist/idai-components-deps.js      # concatenated and minified dependencies
dist/idai-components-no-tpls.js  # js library without the templates
dist/idai-components-tpls.js     # angular templates
dist/css/idai-components.css     # full css including bootstrap
dist/css/idai-components.min.css # minified full css including bootstrap
```

In most cases only `idai-components.min.js` and `idai-components.min.css` need
to be referenced by applications making use of idai-components.

## Testing

Unit tests are simply run by `npm test`. E2E tests are run by 
`export LC_NUMERIC="en_US.UTF-8" && npm run e2e`. Note the app must be served on
`8084` as a precondition for the latter. You can do it by running `npm start` on 
another console.
