class MultiValueDictionary {
    constructor() {
        this.dictionary = {};
    }

    getKeys() {
        // Return all keys. Order not guaranteed
        return (Object.keys(this.dictionary));
    }

    getMembers(key) {
        // Return members for a given key. Order not guaranteed
        // Throw error if key does not exist
        if (!this.keyExists(key)) {
            throw new Error(`key does not exist`);
        }
        return this.dictionary[key];
    }

    add(key, member) {
        // Add a member to a key
        // If key does not yet exist, create it and add member
        // Throw error if member already exists for that key
        if (!this.keyExists(key)) {
            this.dictionary[key] = [];
        }
        if (this.memberExists(key, member)) {
            throw new Error(`member already exists for key`);
        }
        this.dictionary[key].push(member);
    }

    remove(key, member) {
        // Remove a particular member from a key
        // If last member is removed from a key, remove the key itself as well
        if (!this.keyExists(key)) {
            throw new Error('key does not exist');
        }
        if (!this.memberExists(key, member)) {
            throw new Error('member does not exist');
        }
        this.dictionary[key] = this.dictionary[key].filter(val => val !== member);
        if (this.dictionary[key].length === 0) {
            delete this.dictionary[key];
        }
    }

    removeAll(key) {
        // Removes all members for a key and the given key itself
        if (!this.keyExists(key)) {
            throw new Error('key does not exist');
        }
        delete this.dictionary[key];
    }

    clear() {
        // Clears all keys and members from the dictionary
        this.dictionary = {};
    }

    keyExists(key) {
        // Return true if the key exists, else return false
        return this.dictionary.hasOwnProperty(key);
    }

    memberExists(key, member) {
        // Return boolean of whether member exists in a given key
        // Return false if key does not exist
        if (!this.keyExists(key)) {
            return false;
        }
        return this.dictionary[key].includes(member);
    }

    getAllMembers() {
        // Return all members in dictionary.
        // If no members exist return empty array
        let members = [];
        for (const key in this.dictionary) {
            members = members.concat(this.dictionary[key]);
        }
        return members;
    }

    getItems() {
        // Return dictionary object
        return this.dictionary;
    }
}

module.exports = MultiValueDictionary;