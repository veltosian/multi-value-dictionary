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
                this.runMembersCommand(key);
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
        this.list(keys);
    }

    runMembersCommand(key) {
        let members = null;
        try {
            members = this.dictionary.getMembers(key);
            this.list(members);
        }
        catch (err) {
            this.output(err);
        }
    }

    list(elements) {
        if (!elements || elements.length === 0) {
            console.log('');
        }
        else {
            elements.forEach((element, index) => {
                console.log(`${index + 1}) ${element}`);
            })
        }
    }

    output(msg) {
        console.log(`) ${msg}`);
    }
}

module.exports = dictionaryOutputHandler;