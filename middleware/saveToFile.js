const { format } = require('date-fns');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const saveToFile = async (word) => {
    const logWord = `${format(new Date(), 'yyyy MMM do\t HH:mm:ss')}\t${word}\n`;
    try {
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        };
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'loggedWords.txt'), logWord);
    } catch(error){
        console.log(error);
    }
}

module.exports = saveToFile;
