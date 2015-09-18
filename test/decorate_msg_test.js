/**
 * Test case for decorateMsg.
 * Runs with nodeunit.
 */

var decorateMsg = require('../lib/msg/decorate_msg.js');

exports['Decorate msg'] = function (test) {
    test.ok(decorateMsg('foo', 'green'));
    test.equal(decorateMsg(null), null);
    test.done();
};


exports['Decorate msg with invalid color.'] = function (test) {
    test.throws(function () {
        decorateMsg('foo', '__not_existing_color');
    });
    test.done();
};

