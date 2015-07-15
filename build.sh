#!/bin/bash
# Author: Daniel M. de Oliveira

rm dest/*js
grunt html2js
sed 's/\.\.\/src\/partials/partials/g' dest/templates.js > dest/templates.seded.js
grunt uglify