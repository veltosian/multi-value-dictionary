const DictionaryOutputHandler = require('../src/dictionaryOutputHandler');

function main() {
    console.log(`Add Test : ${addTest() ? 'PASS' : 'FAIL'}`);
    console.log(`Remove Test : ${removeTest() ? 'PASS' : 'FAIL'}`);
}

function addTest() {
    let pass = true;
    const dictionaryOutputHandler = new DictionaryOutputHandler();
    dictionaryOutputHandler.handleCommand('ADD', 'foo', 'bar');
    const dictionaryCopy = dictionaryOutputHandler.dictionary.getItems();
    if (Object.keys(dictionaryCopy).join('') !== 'foo') {
        pass = false;
    }
    return pass;
}

function removeTest() {
    const dictionaryOutputHandler = new DictionaryOutputHandler();
    dictionaryOutputHandler.dictionary.dictionary = { 'foo': ['bar', 'baz'] };
    dictionaryOutputHandler.handleCommand('REMOVE', 'foo', 'baz');

    const dictionaryCopy = dictionaryOutputHandler.dictionary.getItems();
    let result = true;
    result = result && Object.keys(dictionaryCopy).join('') === 'foo';
    result = result && dictionaryCopy.foo.length === 1 && dictionaryCopy.foo[0] === 'bar';
    return result;
}

main();