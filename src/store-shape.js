const {PropTypes: {shape, object, func}} = require('react');

export default shape({
    state: object.isRequired,
    queued: object.isRequired,
    dispatch: func.isRequired,
    observe: func.isRequired,
    use: func.isRequired,
    queue: func.isRequired
});
