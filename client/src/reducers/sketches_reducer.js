export default (state = {loading: false, sketches: []}, action) => {
  switch (action.type) {
    case 'LOADING_SKETCHES':
      return Object.assign({},state,{loading: true})
    case 'ADD_SKETCH':
      const sketch = Object.assign({}, action.sketch)
      return {loading: false, sketch: sketch}
    case 'FETCH_SKETCH':
      return {loading: false, sketch: action.payload}
    case 'FETCH_SKETCHES':
      return {loading: false, sketches: action.payload}
    default:
      return state;
  }
}
