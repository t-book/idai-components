# idai-components

Components library for use in other angular based dai projects. 

To build the library

```bash
npm install
./build.sh
```

This will result in a file

```bash
dest/idai-components.min.js
```

This file contains all the contents (js as well as html) from below the "src" directory.

## Demo application

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
each call to ./build.sh will result in an update of the content shown by the server, 
based on your edited library code from "src".






