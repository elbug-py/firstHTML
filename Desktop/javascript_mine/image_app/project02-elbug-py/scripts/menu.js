'use strict'
/* Libraries */
const inquirer = require('inquirer');

const { printTable } = require('console-table-printer');

const figlet = require('figlet');

const im = require('./image_modifier.js');

/* Functions */


/* Code */

alert(
        figlet.textSync('Image Filter App', {
            font: 'Ghost',
            horizontalLayout: 'controlled smushing',
            verticalLayout: 'default',
            width: 110,
            whitespaceBreak: true
        }
    )
)





inquirer
  .prompt([
    {
        name: 'image_name',
        message: 'Name of the image to edit: '
      },
    {
        type: 'list',
        name: 'type_filter',
        message: 'What filter would you like to apply?',
        choices: ['b&w', 'sepia', 'negative']
    }
  ])
  .then(answers => {
    if (answers.type_filter == 'b&w'){
        im.imageToGreyscale(answers.image_name, answers.image_name)
    }

    else if (answers.type_filter == 'sepia'){
        im.imageToSepia(answers.image_name, answers.image_name)
    }
    
    else if (answers.type_filter == 'negative'){
        im.imageToNegative(answers.image_name, answers.image_name)
    }

  });
