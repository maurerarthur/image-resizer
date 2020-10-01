# image-resizer
Library to resize images in an elegant way

# Usage
Import the library:

```
<script defer src="image-resizer.js"></script>
```

And then place the image like this:

```
<div data-image="image_url.png" class="img-resize"></div>
```

You can also define the custom width and height:

```
const imageResizer = {
    height: "400px",
    width: "100%"
};
```