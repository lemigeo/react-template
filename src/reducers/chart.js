import actions from '../actions';
const {ADD_CHART, GET_CHART} = actions.chart;

const initialState = {
  selected: {id: '', data: []},
  list: [],
};

const chart = (state = initialState, action) => {
  switch (action.type) {
      case ADD_CHART:
        state.list.push({
          id: action.id,
          data: action.data,
        });
        return state;
      case GET_CHART:
        state.selected = state.list.find(chart => chart.id === action.id)
        return state;
      default:
        return state;
  }
};

export default chart;