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
                this.runItemsCommand();
                break;
            case 'HELP':
                this.runHelpCommand();
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

    runRemoveCommand(key, member) {
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

    runItemsCommand() {
        const items = this.dictionary.getItems();
        let itemList = [];

        for (const key in items) {
            const formattedList = items[key].map(member => `${key}: ${member}`)
            itemList = itemList.concat(formattedList);
        }

        this.list(itemList);
    }

    runHelpCommand() {
        const commandMsgs = [
            'KEYS  - Displays keys currently in the dictinoary',
            'MEMBERS <key>  - Displays members currently associated with the given key',
            'ADD <key> <member>  - Adds member to key in dictionary. If key does not exist, also adds the key',
            'REMOVE <key> <member>  - Removes member from given key in dictionary. Also removes the key if last member is removed',
            'REMOVEALL <key>  - Removes all members associated with given key and removes the key itself',
            'CLEAR  - Removes all keys and members from dictionary',
            'KEYEXISTS <key>  - Indicates whether a key exists by outputting true/false',
            'MEMBEREXISTS <key> <member>  - Indicates whether member exists for given key by outputting true/false',
            'ALLMEMBERS <key>  - Displays all members in the dictionary',
            'ITEMS  - Displays all key:member pairs in the dictionary'
        ];
        console.log('Multi-value Dictionary Help Menu')
        console.log('Tool to manipulate dictionary of keys and associated members');
        console.log('Commands');
        commandMsgs.forEach(msg => {
            console.log(`\t${msg}`);
        })
    }

    output(msg) {
        console.log(`) ${msg}`);
    }
}

module.exports = dictionaryOutputHandler;