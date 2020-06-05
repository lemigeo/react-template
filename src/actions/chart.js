const ADD_CHART = 'ADD';
const GET_CHART = 'GET';

function add(id, data) {
    return { type: ADD_CHART,  id, data };
}

function get(id) {
    return { type: GET_CHART,  id };
}

export default {
    ADD_CHART,
    GET_CHART,
    add,
    get,
}