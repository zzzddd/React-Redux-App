import axios from "axios";
export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=&location=`
    )
    .then(res => {
        console.log('inside axios...',res.data.all)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: err.response.message });
    });
};
// same as:

// const fetchFacts = () => {
//   return dispatch => {
//     dispatch({ type: START_FETCHING });
//     // do some async action and dispatch an error or success action
//     axios
//       .get('https://cat-fact.herokuapp.com/facts')
//       .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//       .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
//   };
// };

// redux thunk
// const thunk = next => action => store => {
//   if (typeof action === 'object') {
//     next(action); // forward action untouched
//   } else if (typeof action === 'function') {
//     action(store.dispatch) // stop the action and call the function
//   }
// }
