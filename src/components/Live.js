import React, { useEffect, useReducer } from 'react';
import Loader from './Loader';
import Chart from './Chart';
import DataTable from './DataTable';
import { Paper } from '@material-ui/core';
import ClinetSocket from '../common/ClientSocket';
import { parseData } from '../common/utils';

function livePageReducer(state, action) {
  switch (action.type) {
    case 'receive_data':
      const {data} = state;
      const {newData} = action;
      data.push(new parseData(newData));
      return {...state, ...data};

    default:
      break;
  }
}

const Live = () =>{
  const [state, dispatch] = useReducer(livePageReducer, {data: []});

  const socketListener = (newData)=>{
    dispatch({type: 'receive_data', newData})
  }

  useEffect(()=>{
    const socket = new ClinetSocket();
    socket.listenToSocket(socketListener);

    return ()=>{
      socket.unsubscribe();
    }
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