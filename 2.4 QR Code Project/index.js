/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qrImage from 'qr-image';
import fs from "fs";

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter url:',
        },
        {
            type: 'input',
            name: 'name2',
            message: 'enter url2:',
        }
    ])
    .then((answers) => {

        console.log(`Hello, ${answers.name}!`);

        var qr_svg = qrImage.image(answers.name, { type: 'png' });

        qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log(error);

            // Something else went wrong
        }
    });



