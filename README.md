# idai-components

Components library for use in other angular based dai projects. 

## Demo application and usage documentation

A sample application can get started via

```bash
grunt server
```

The demo app is then served on port 1235. 
It documents and shows the libraries facilities in action.

Changes to partials and js of the library (src/**) as well as of the
demo application files will automatically trigger a
rebuild and also a reload in active browser windows.

## Development and deployment

### Preparative steps

In order to make additions to the library, these preparative steps are necessary:

```bash
npm install
npm install -g bower grunt-cli
bower install
```

### Building and testing

If changes to the library code are beeing made, 

```bash
grunt build
```

has to be called after changing the source code. This will run the tests,
(which can also be done solo by calling

```bash
grunt test
```

) and build the project which results in the files

```bash
dist/idai-components.js
dist/idai-components.min.js
dist/css/bootstrap-theme.min.css
```

which represent the library binaries.

### Deployment and versioning

The resulting files under dist are to be pushed to GitHub, together with the changes to the source code.
These are the resulting binaries which clients can get via bower, adding a dependency
in their local bower.json:

```json
"idai-components": "codarchlab/idai-components#~version"
```

Bower and GitHub play well together so that bower will know to fetch the library automatically from GitHub.

When pushing the changes and binaries to GitHub, a new branch for the changes has
to be made in order to make the changes available to clients as a new library version.

The new tag should follow the guidelines for [semantic versioning](http://semver.org/), which means basically
that for functional additions to the library the middle digit gets incremented and for API breaking changes the first digit gets incremented.

