import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  red:{
    backgroundColor: "#6BA583a8"
  },
  green:{
    backgroundColor : "#FF0000a8"
  }
});

export default function DataTable({data}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Open (Rs)</TableCell>
            <TableCell align="right">High (Rs)</TableCell>
            <TableCell align="right">Low (Rs)</TableCell>
            <TableCell align="right">Close (Rs)</TableCell>
            <TableCell align="right">Volume (Rs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className={(+row.close < +row.open ? classes.green : classes.red)}>
              <TableCell component="th" scope="row">
                {new Date(row.date).toLocaleDateString()}
              </TableCell>
              <TableCell align="right">{+row.open}</TableCell>
              <TableCell align="right">{+row.high}</TableCell>
              <TableCell align="right">{+row.low}</TableCell>
              <TableCell align="right">{+row.close}</TableCell>
              <TableCell align="right">{+row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
