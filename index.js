const MultiValueDictionary = require('./dictionary.js');
const { question } = require('readline-sync');

async function run() {
    const dictionary = new MultiValueDictionary();

    while (true) {
        const input = question('>');
        const command = getCommand(input);
        if (!command) {
            console.log(`Unsupported command: "${input}"`)
            continue;
        }
        const {key, member} = getArguments(input);
        handleCommand(command, key, member);
    }
}

function getCommand(input) {
    const command = input.split(' ')[0];
    const validCommands = [
        'KEYS',
        'MEMBERS',
        'ADD',
        'REMOVE',
        'REMOVEALL',
        'CLEAR',
        'KEYEXISTS',
        'MEMBEREXISTS',
        'ALLMEMBERS',
        'ITEMS'
    ];

    if (validCommands.includes(command)) {
        return command;
    }
    else {
        return null;
    }
}

function getArguments(input) {
    // TODO Add validation to input arguments
    const arguments = input.split(' ');
    const key = arguments[1];
    const member = arguments[2];
    return {key, member};
}

function handleCommand(command, key, member) {
    console.log(`Command:\t${command}`);
    console.log(`Key:\t\t${key}`)
    console.log(`Member:\t\t${member}`)
}

run().then();