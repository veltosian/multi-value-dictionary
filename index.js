const MultiValueDictionary = require('./dictionary.js');
const { question } = require('readline-sync');

async function run() {
    const dictionary = new MultiValueDictionary();

    while (true) {
        const input = question('>');
        console.log(`You input ${input}`);
    }
}

run().then();