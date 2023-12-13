const fs = require('fs');
const path = require('path');

const appDirectory = './app';

function createCssFilesInDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            const cssFilePath = path.join(filePath, `${file}.module.css`);
            fs.writeFileSync(cssFilePath, '', 'utf8');
            createCssFilesInDirectory(filePath);
            console.log(`Created ${cssFilePath}`);
        }
    });
}

createCssFilesInDirectory(appDirectory);
