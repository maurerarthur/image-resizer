(() => {

    const height = typeof imageResizer != "undefined" ? imageResizer.height : "450px";
    const width = typeof imageResizer != "undefined" ? imageResizer.width : "100%";

    const elements = document.querySelectorAll(".img-resize");

    new Promise(resolve => elements.forEach(i => {

        let imageSource = i.getAttribute("data-image");

        i.style.display = "flex";
        i.style.flexDirection = "row";
        i.style.alignItems = "center";
        i.style.justifyContent = "center";
        i.style.width = width;
        i.style.height = height;
        i.style.background = `url("${imageSource}") no-repeat center`;
        i.style.backgroundSize = "cover";

        i.innerHTML = `<div></div> <img src="${imageSource}" /> <div></div>`;

        return resolve("Success");

    })).then(() => {

        const image = document.querySelectorAll(".img-resize > img");
        const filter = document.querySelectorAll(".img-resize > div");

        image.forEach(i => {
            i.style.width = "auto";
            i.style.height = "100%";
            i.style.objectFit = "contain";
        });

        filter.forEach(i => {
            i.style.width = "100%";
            i.style.height = "100%";
            i.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
        });

    });

})();