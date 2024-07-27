const initialState = {
    analysisResults: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ANALYSIS_RESULTS':
        return {
          ...state,
          analysisResults: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  