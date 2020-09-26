import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Chart from './Chart';
import DataTable from './DataTable';
import { makeStyles } from '@material-ui/core/styles';
import { getData } from '../common/utils';
import { Paper, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControlWrapper:{
    display: "flex",
    flexDirection: "row-reverse"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const fetchChartData = async (callBack, interval=1) => {
  const data = await getData(interval);
  callBack(data);
}

const Home = (props) =>{
  const [data, setData] = useState(null); 
  const classes = useStyles();
  const [limit, setLimit] = React.useState(1);

  const handleChange = (event) => {
    const limit = event.target.value;
    setLimit(limit);
    fetchChartData(setData, limit);
  };

  useEffect(()=>{
    fetchChartData(setData);
  }, []);

  return(
      data ? 
        <>
          <Paper variant="outlined" elevation={0}>
            <Chart data={data} />
            <div className={classes.formControlWrapper}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Data Limit</InputLabel>
                <Select
                  value={limit}
                  onChange={handleChange}
                  label="Data Limit"
                >
                  <MenuItem value={1}>200</MenuItem>
                  <MenuItem value={2}>400</MenuItem>
                  <MenuItem value={3}>600</MenuItem>
                  <MenuItem value={4}>800</MenuItem>
                  <MenuItem value={5}>1000</MenuItem>
                  <MenuItem value={6}>1200</MenuItem>
                  <MenuItem value={7}>1400</MenuItem>
                  <MenuItem value={8}>1600</MenuItem>
                  <MenuItem value={9}>1800</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Paper>
          <DataTable data={[...data].reverse()}/>
        </>
        : <Loader/>
  );
}

export default Home;