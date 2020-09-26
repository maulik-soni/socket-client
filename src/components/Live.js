import React, { useEffect, useReducer } from 'react';
import Loader from './Loader';
import Chart from './Chart';
import DataTable from './DataTable';
import { Paper } from '@material-ui/core';
import ClinetSocket from '../common/ClientSocket';

const socket = new ClinetSocket();

function init(initialData) {
  return {data: initialData};
}

function reducer(state, action) {
  switch (action.type) {
    case 'receive_data':
      const {data} = action;
      return {data};
    default:
      socket.unsubscribe();
      throw new Error("Something went wrong :( !!!");
  }
}

const Live = (props) =>{
  const [state, dispatch] = useReducer(reducer, [], init);

  const socketListener = (data)=>{
    dispatch({type: 'receive_data', data})
  }

  useEffect(()=>{
    socket.listenToSocket(socketListener);
  }, []);

  return(
      (state.data.length > 10) ? 
        <>
          <Paper variant="outlined" elevation={0}>
            <Chart data={state.data} />
          </Paper>
          <DataTable data={[...state.data].reverse()}/>
        </>
        : <Loader/>
  );
}

export default Live;