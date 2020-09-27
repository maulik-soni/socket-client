import React, { useEffect, useReducer } from 'react';
import Loader from './Loader';
import Chart from './Chart';
import DataTable from './DataTable';
import { Paper } from '@material-ui/core';
import ClinetSocket from '../common/ClientSocket';
import { parseData } from '../common/utils';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  alert:{
    marginBottom: theme.spacing(2),
  }
}));

function livePageReducer(state, action) {
  let data;
  switch (action.type) {
    case 'receive_data':
      data = state.data || [];
      const {newData} = action;
      data.push(new parseData(newData));
      return {...state, ...{data}};

    case 'persist_data':
      data = state.data;
      const persistData = JSON.stringify(data);
      window.localStorage.setItem("liveChartData", persistData);
      return {...state, ...{data}};
    default:
      break;
  }
}

const Live = () =>{
  const classes = useStyles();

  const {onLine} = navigator;
  const [state, dispatch] = useReducer(livePageReducer, {
    data: onLine ? [] : JSON.parse(window.localStorage.getItem("liveChartData"))
  });

  const socketListener = (newData)=>{
    dispatch({type: 'receive_data', newData});
  }
  
  const networkFallBack = () => {
    dispatch({type: 'persist_data'});
  }

  useEffect(()=>{
    const socket = new ClinetSocket();
    socket.listenToSocket(socketListener);
    socket.onError(networkFallBack);

    return ()=>{
      socket.unsubscribe();
    }
  }, []);

  return(
      <>
      {!onLine &&<Alert severity="error" className={classes.alert}>Something went wrong with Network!!!</Alert>}
      {state.data && (state.data.length > 10) ? 
        <>
          <Paper variant="outlined" elevation={0}>
            <Chart data={state.data} />
          </Paper>
          <DataTable data={[...state.data].reverse()}/>
        </>
        : <Loader/>
      }
      </>
  );
}

export default Live;