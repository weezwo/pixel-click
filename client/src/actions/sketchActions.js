import fetch from 'isomorphic-fetch';

export function fetchSketches(page){
  return function(dispatch){
    dispatch({type: 'LOADING_SKETCHES'})
    return fetch(`/api/sketches/?page=${page}`, {
      accept: 'application/json'
    }).then(res => res.json()
  ).then(responseJSON =>{
    dispatch({type: 'FETCH_SKETCHES', payload: responseJSON})
  })
  }
}

export function fetchSketch(sketchId){
  return function(dispatch){
    dispatch({type: 'LOADING_SKETCHES'})
    return fetch(`/api/sketches/${sketchId}`, {
      accept: 'application/json'
    }).then(res => res.json()
  ).then(responseJSON =>{
    dispatch({type: 'FETCH_SKETCH', payload: responseJSON})
  })
  }
}
