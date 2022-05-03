const { question } = require('readline-sync');
const dictionaryOutputHandler = require('./src/dictionaryOutputHandler');

async function run() {
    const dictionaryHandler = new dictionaryOutputHandler();

    while (true) {
        const input = question('>');
        const command = getCommand(input);
        if (!command) {
            console.log(`Error: Unsupported command: "${input}"`)
            continue;
        }
        const {key, member} = getArguments(input);
        if (!isValidCommand(command, key, member)) {
            console.log(`Invalid command/argument combination`);
            continue;
        }
        dictionaryHandler.handleCommand(command, key, member);
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

function isValidCommand(command, key, member) {
    // TODO validate command and arguments
    return true;
}

run().then();