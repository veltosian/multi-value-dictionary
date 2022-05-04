const { question } = require('readline-sync');
const dictionaryOutputHandler = require('./src/dictionaryOutputHandler');

const noArgCommands = [
    'KEYS',
    'CLEAR',
    'ALLMEMBERS',
    'ITEMS'
];

const singleArgCommands = [
    'MEMBERS',
    'REMOVEALL',
    'KEYEXISTS'
]

const doubleArgCommands = [
    'ADD',
    'REMOVE',
    'MEMBEREXISTS'
]

const validCommands = noArgCommands.concat(singleArgCommands).concat(doubleArgCommands);

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
    const command = input.split(' ')[0].toUpperCase(); // zy Consider removing toUpperCase()

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
    if (key && member) {
        return doubleArgCommands.includes(command);
    }

    if (key) {
        return singleArgCommands.includes(command);
    }

    return noArgCommands.includes(command);
}

run().then();