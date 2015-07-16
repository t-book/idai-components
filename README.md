# idai-components

Components library for use in other angular based dai projects. 

## Versioning

The current version is 0.1.x

For functional additions to the library, the last digit gets incremented.

For API breaking changes, we increment the middle digit and create a new branch.

## Usage in other projects

Just copy the file to your project and link the source idai-components-[version].min.js 
from the index.html
of your project. Do this after the angular link and before the links to your application 
scripts, which make use of the library.

## Installation

To build and test the library, these preparative steps are necessary:

```bash
npm install
npm install -g karma
npm install -g karma-jasmine
npm install -g karma-ng-html2js-preprocessor
npm install -g karma@canary phantomjs karma-phantomjs-launcher
```

## Building the library

To build the library

```bash
./build.sh
```

This will result in a file

```bash
dest/idai-components-[version].min.js
```

This file contains all the contents (js as well as html) from below the "src" directory.

## Demo application and development

For easy development, you can start a grunt server

```bash
grunt server
```

which serves a demo app on port 1234, which consists of 

```bash
index.html
js/**/*.js
```

and includes the minified library.

To reflect your libraries changes as you write them, the
server watches dest/idai-components-[version].min.js continuosly and
every call to

```bash
./build.sh 
```

will result in an update of the content shown by the server, 
based on your edited library code from "src".

## Testing the library

To test the library, execute

```bash
karma start test/karma.conf.js
````





