import './assets/styles/style.css'

// import Jimp from 'jimp'
import Jimp from 'jimp/es';

const input = document.createElement('input') as HTMLDivElement
const imgElement = document.createElement('img') as HTMLDivElement

imgElement.setAttribute('src', '#')


input.onchange = function (event) {
    if (event.target.files.length > 0) {
        console.log('extension')
        // console.log(event.target.files)
        // console.log(event.target.files.length)
        var src = URL.createObjectURL(event.target.files[0]);
        // console.log(src)

        let img = new Image();
        img.src = src;
        // console.log(img)

        Jimp.read({
            url: src,
        })
            .then((image) => {
                // Crop logic goes here
                // console.log("image content", image)


                const w = image.bitmap.width;
                const h = image.bitmap.height;
                const data = image.bitmap.data;

                // console.log(w)
                // console.log(h)
                console.log(data)

                image.resize(100, 200).getBase64("image/jpeg", (err, res) => {
                    console.log(err)
                    console.log("jh", res)
                    imgElement.src = res

                })

            })
            .catch((error) => {
                console.log(`Error loading image -> ${error}`)
            })


    }
}
