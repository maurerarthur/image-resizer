# image-resizer
Library to resize images in an elegant way, by making the images stick to the same height.

# Usage
Import the library:

```
<script defer src="image-resizer.min.js"></script>
```

And then place the image like this:

```
<div data-image="image_url.png" class="img-resize"></div>
```

You can also define the custom width and height:

```
<script async="false">
    const imageResizer = {
        height: "400px",
        width: "100%"
    };
</script>
```

In order to have all the images with the same height, just assign the height of the less heighted image to the height attribute of the imageResizer object.