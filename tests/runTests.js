const Dictionary = require('../src/dictionary');

function main() {
    console.log(`Add Test : ${addTest() ? 'PASS' : 'FAIL'}`);
}

function addTest() {
    let pass = true;
    const dictionary = new Dictionary();
    dictionary.add('foo', 'bar');
    if (dictionary.getKeys().join('') !== 'foo') {
        pass = false;
    }
    return pass;
}

main();