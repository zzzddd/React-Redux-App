import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// import { useDarkMode } from './hooks/useDarkMode';
import { getData } from './store/actions';

import Jobs from './component/facts';

export default function App() {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');


 useEffect(() => dispatch(getData('', '')), []);

  return (
    <div>
        <h4>
          Fetching data, thank you for your patience...
        </h4>
      {!isFetching && <Jobs data={data} />}
    </div>
  );
}