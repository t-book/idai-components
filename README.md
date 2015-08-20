# idai-components

Components library for use in other angular based dai projects. 

## Versioning

The current version is 0.9.x

For functional additions to the library, the middle digit gets incremented.

For API breaking changes, we increment the first digit and create a new branch.

## Installation

To build and test the library, these preparative steps are necessary:

```bash
npm install
npm install -g bower grunt-cli
bower install
```

## Building the library

To build the library

```bash
grunt build
```

This will run the tests and build the project which results in the file

```bash
dest/idai-components-[version].min.js
```

This file contains all the contents (js as well as html) from below the "src" directory.

## Demo application and development

For easy development, you can start a grunt server

```bash
grunt server
```

which serves a demo app and documentation on port 1235.

Changes to partials and js files will automatically trigger a
rebuild and also a reload in active browser windows.

## Testing the library

To test the library, execute

```bash
grunt test
````





