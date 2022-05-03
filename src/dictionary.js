class MultiValueDictionary {
    constructor() {
        this.dictionary = {};
    }

    getKeys() {
        // Return all keys. Order not guaranteed
        return (Object.keys(this.dictionary));
    }

    getMembers() {
        // Return members for a given key. Order not guaranteed
        // Throw error if key does not exist
    }

    add(key, member) {
        // Add a member to a key
        // If key does not yet exist, create it and add member
        // Throw error if member already exists for that key
        if (!this.dictionary.hasOwnProperty(key)) {
            this.dictionary[key] = [];
        }
        if (this.dictionary[key].includes(member)) {
            throw new Error(`Error, member already exists for key`);
        }
        this.dictionary[key].push(member);
    }

    remove(key, member) {
        // Remove a particular member from a key
        // If last member is removed from a key, remove the key itself as well
    }

    removeAll(key) {
        // Removes all members for a key and the given key itself
    }

    clear() {
        // Clears all keys and members from the dictionary
    }

    keyExists(key) {
        // Return true if the key exists, else return false
    }

    memberExists(key, member) {
        // Return boolean of whether member exists in a given key
        // Return false if key does not exist
    }

    getAllMembers() {
        // Return all members in dictionary.
        // If no members exist return empty array
    }

    getItems() {
        // Return dictionary object
    }
}

module.exports = MultiValueDictionary;