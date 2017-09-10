# side-nav
A HTML custom element implementing the `<side-nav>` tag.

[ Add a nice image here ]

## Setup

### Installation
```
npm i side-nav
```

---

```Html
<script src="node_modules/side-nav/side-nav.js"></script>
```
or if you're bundling
```Javascript
import "side-nav";
// or
require("side-nav");
```


## Usage
```HTML
    <side-nav open>
        // Your content here ...
    </side-nav>
```

To have the `side-nav` open by default you can add the `open` property, other wise it will be closed. 

You can also toggle the state of the `side-nav` by adding or remove the `open` property. 

To programatically open or close the side nav you need only call the `open()` or `close()` method. 

