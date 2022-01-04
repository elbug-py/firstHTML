
const im = require('./image_modifier.js');

const IMAGE_FILE_NAME = 'yui.jpeg';

im.imageToGreyscale(IMAGE_FILE_NAME, IMAGE_FILE_NAME);
im.imageToNegative(IMAGE_FILE_NAME, IMAGE_FILE_NAME);
im.imageToSepia(IMAGE_FILE_NAME, IMAGE_FILE_NAME);