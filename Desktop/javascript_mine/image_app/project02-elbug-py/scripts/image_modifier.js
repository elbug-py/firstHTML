'use-strict';

const { rgbaToInt } = require('jimp');
const Jimp = require('jimp');

const colorToRGBA = color => Jimp.intToRGBA(color);

const imageToGreyscale = (image, name) => {Jimp.read(image)
                              .then(image =>{
                                const output = new Jimp(image.bitmap.width, image.bitmap.height, 0x000000ff);
                                const height = Array.from({length: (image.bitmap.height)+1}, (v, i) => i);
                                const width = Array.from({length: (image.bitmap.width)+1}, (v, i) => i);
                                height.map(y => width.map(x => {
                                  const color = image.getPixelColor(x, y);
                                  const rgba = colorToRGBA(color);
                                  const newColor = greyScale(rgba)
                                  output.setPixelColor(newColor, x, y);
                                }));
                                output.write('Descargas/greyscale_'+name);
                              })
                            .catch(err => {
                              console.log(`The image file could not be loaded properly due to the following error:\n${err}`);
  })
}

const imageToNegative = (image, name) => {Jimp.read(image)
  .then(image =>{
    const output = new Jimp(image.bitmap.width, image.bitmap.height, 0x000000ff);
    const height = Array.from({length: (image.bitmap.height)+1}, (v, i) => i);
    const width = Array.from({length: (image.bitmap.width)+1}, (v, i) => i);
    height.map(y => width.map(x => {
      const color = image.getPixelColor(x, y);
      const rgba = colorToRGBA(color);
      const newColor = negColor(rgba)
      output.setPixelColor(newColor, x, y);
    }));
    output.write('Descargas/negative_'+name);
  })
.catch(err => {
  console.log(`The image file could not be loaded properly due to the following error:\n${err}`);
})
}

const imageToSepia = (image, name) => {Jimp.read(image)
  .then(image =>{
    const output = new Jimp(image.bitmap.width, image.bitmap.height, 0x000000ff);
    const height = Array.from({length: (image.bitmap.height)+1}, (v, i) => i);
    const width = Array.from({length: (image.bitmap.width)+1}, (v, i) => i);
    height.map(y => width.map(x => {
      const color = image.getPixelColor(x, y);
      const rgba = colorToRGBA(color);
      const red = (rgba['r'] * 0.393 + rgba['g'] * 0.769 + rgba['b'] * 0.189)
      const green = (rgba['r'] * 0.349 + rgba['g'] * 0.686 + rgba['b'] * 0.168)
      const blue = (rgba['r'] * 0.272 + rgba['g'] * 0.534 + rgba['b'] * 0.131)
      const colors = [red, green, blue]
      const newColors = colors.map(color => {if (color > 255){
                                  return 255
                                  }
                                  return color
      })
      const newColor = rgbaToInt(newColors[0], newColors[1], newColors[2], 255)
      output.setPixelColor(newColor, x, y);
    }));
  output.write('Descargas/sepia_'+name);
  })
.catch(err => {
  console.log(`The image file could not be loaded properly due to the following error:\n${err}`);
})
}

const greyScale = obj => {const rgba = (Object.keys(obj).reduce((agg, key) => agg+obj[key], 0)-255)/3;
                            return rgbaToInt(rgba, rgba, rgba, 255)}

const negColor = obj => {const rgba = Object.keys(obj).map(key => {if (key != 'a'){
                                                      return 255-obj[key]}
                                                    else{
                                                      return 255
                                                    }})
                                                  return rgbaToInt(rgba[0], rgba[1], rgba[2], rgba[3])}

module.exports = {imageToGreyscale, imageToNegative, imageToSepia, colorToRGBA};