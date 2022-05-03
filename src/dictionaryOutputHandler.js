const dictionary = require("./dictionary");

class dictionaryOutputHandler {
    constructor() {
        this.dictionary = new dictionary();
    }

    handleCommand(command, key, member) {
        switch (command) {
            case 'KEYS':
                this.runKeysCommand();
                break;
            case 'MEMBERS':
                break;
            case 'ADD':
                this.runAddCommand(key, member);
                break;
            case 'REMOVE':
                break;
            case 'REMOVEALL':
                break;
            case 'CLEAR':
                break;
            case 'KEYEXISTS':
                break;
            case 'MEMBEREXISTS':
                break;
            case 'ALLMEMBERS':
                break;
            case 'ITEMS':
                break;
            default:
                console.log(`Error: Unsupported command: ${command}`);
        }
    }

    runAddCommand(key, member) {
        try {
            this.dictionary.add(key, member);
            this.output('Added');
        }
        catch (err) {
            this.output(err);
        }
    }

    runKeysCommand() {
        const keys = this.dictionary.getKeys();
        keys.forEach((key, index) => {
            console.log(`${index + 1}) ${key}`);
        })
    }

    output(msg) {
        console.log(`) ${msg}`);
    }
}

module.exports = dictionaryOutputHandler;