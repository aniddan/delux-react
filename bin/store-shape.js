'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('react');

var _require$PropTypes = _require.PropTypes;
var shape = _require$PropTypes.shape;
var object = _require$PropTypes.object;
var func = _require$PropTypes.func;
exports.default = shape({
    state: object.isRequired,
    queued: object.isRequired,
    dispatch: func.isRequired,
    observe: func.isRequired,
    use: func.isRequired,
    queue: func.isRequired
});