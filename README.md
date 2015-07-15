# idai-components

Components library for use in other angular based dai projects. 


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
dest/idai-components.min.js
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
server watches dest/idai-components.min.js continuosly and
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





