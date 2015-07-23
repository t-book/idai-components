# Usage

Just copy the file to your project and link the source idai-components-[version].min.js 
from your project's index.html.
 
```html
<script src="dest/idai-components-0.1.0.min.js"></script>
``` 
 
 Do this after the angular link and before the links to your application 
scripts, which make use of the library.


Include these dependencies from within your main module:

```javascript
angular.module('sampleApp',[
	'idai.components',
	'idai.templates'
]);
```

Note: For an example on the usage of the library, just run "grunt server".

## The navbar and footer directives

idai-navbar:

```html
<idai-navbar 
	login-function="loginFunction()"
	logout-function="logoutFunction()"
	user-object="user"></idai-navbar>
```
idai-footer:

```footer
<idai-footer></idai-footer>
```

Via login-function and logout function it is possible to bind functions
from the surrounding scope to the sign in and logout (hidden in dropdown) 
buttons buttons. Pass the user object from the surrounding context 
into user-object. When not empty, the sign in and sign up buttons get replaced
by a user dropdown menu which also contains the logout button.

Navbar requires the application to provide some html which will get rendered
seamlessly into the directives html.

```html
partials/navbar-menu.html - will be inserted as html into the dropdown menu
partials/navbar-project.html - will be inserted as brand text next to your projects logo.
```

The links of the navbar and footer get automatically generated from a static
content dir

```html
info/ - folder from which static pages can get served
info/content.json - navbar and footer links are created automatically from here, localization included
```

which also provides automatic localization. More on this topic can be found [here](localizable_content.md).


Further required artifacts:

```
img/project-logo.png - your projects logo, will appear in the navbar.
img/greif.gif - will appear in the footer
img/siegel_unikoeln.gif - will appear in the footer
```
