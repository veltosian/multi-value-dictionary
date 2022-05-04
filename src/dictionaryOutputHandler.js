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
                this.runRemoveCommand(key, member);
                break;
            case 'REMOVEALL':
                this.runRemoveAllCommand(key);
                break;
            case 'CLEAR':
                this.runClearCommand();
                break;
            case 'KEYEXISTS':
                this.runKeyExistsCommand(key);
                break;
            case 'MEMBEREXISTS':
                this.runMemberExistsCommand(key, member);
                break;
            case 'ALLMEMBERS':
                this.runAllMembersCommand();
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
            console.log('(empty set)');
        }
        else {
            elements.forEach((element, index) => {
                console.log(`${index + 1}) ${element}`);
            })
        }
    }

    runRemoveCommand (key, member) {
        try {
            this.dictionary.remove(key, member);
            this.output('Removed');
        }
        catch (err) {
            this.output(err);
        }
    }

    runRemoveAllCommand(key) {
        try {
            this.dictionary.removeAll(key);
            this.output(`Removed`);
        }
        catch (err) {
            this.output(err);
        }
    }

    runClearCommand() {
        this.dictionary.clear();
        this.output('Cleared');
    }

    runKeyExistsCommand(key) {
        this.output(this.dictionary.keyExists(key));
    }

    runMemberExistsCommand(key, member) {
        this.output(this.dictionary.memberExists(key, member));
    }

    runAllMembersCommand() {
        const members = this.dictionary.getAllMembers();
        this.list(members);
    }

    output(msg) {
        console.log(`) ${msg}`);
    }
}

module.exports = dictionaryOutputHandler;