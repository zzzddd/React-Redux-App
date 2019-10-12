import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getData } from "./store/actions";
import { connect } from "react-redux";
import Jobs from "./component/fact";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./App.css";

// import { useDarkMode } from "./hooks/useDarkMode";
// import { getData } from "./store/actions";

// import Jobs from "./components/Jobs";

// const App = props => {
  const App = () => {
    const data = useSelector(state => state.data);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();
  useEffect(() => dispatch(getData("", "")), []);
    // useEffect(() => {
    //   props.getData();
    // }, []);
    return (
      <div className="App">
        <header>
          <h1>
            <span>Git</span>Hired
          </h1>
        </header>

        <h4>Fetching data, thank you for your patience...</h4>

        <Jobs data={data} />
      </div>
    );
  };
// const mapStateToProps = state => {
//   return {
//     data: state.data,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getData }
// )(App);
export default App;