export default (state = {loading: false, sketches: []}, action) => {
  switch (action.type) {
    case 'LOADING_SKETCHES':
      return Object.assign({},state,{loading: true})
    case 'FETCH_SKETCH':
      return {loading: false, sketches: action.payload}
    case 'FETCH_SKETCHES':
      return {loading: false, sketches: action.payload}
    default:
      return state;
  }
}
