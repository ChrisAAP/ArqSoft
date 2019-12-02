import React from 'react';
// import {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(rubric, wk1, wk2, wk3, wk4, wk5, wk6, wk7, wk8, wk9, wk10, wk11, wk12, wk13, wk14, wk15, wk16) {
  return { rubric, wk1, wk2, wk3, wk4, wk5, wk6, wk7, wk8, wk9, wk10, wk11, wk12, wk13, wk14, wk15, wk16 };
}

const rows = [
  createData('Academic', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
  createData('Team Work', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
  createData('Communication Skills', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
];

export default function Grades() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rubric</TableCell>
            <TableCell align="right">Week&nbsp;1</TableCell>
            <TableCell align="right">Week&nbsp;2</TableCell>
            <TableCell align="right">Week&nbsp;3</TableCell>
            <TableCell align="right">Week&nbsp;4</TableCell>
            <TableCell align="right">Week&nbsp;5</TableCell>
            <TableCell align="right">Week&nbsp;6</TableCell>
            <TableCell align="right">Week&nbsp;7</TableCell>
            <TableCell align="right">Week&nbsp;8</TableCell>
            <TableCell align="right">Week&nbsp;9</TableCell>
            <TableCell align="right">Week&nbsp;10</TableCell>
            <TableCell align="right">Week&nbsp;11</TableCell>
            <TableCell align="right">Week&nbsp;12</TableCell>
            <TableCell align="right">Week&nbsp;13</TableCell>
            <TableCell align="right">Week&nbsp;14</TableCell>
            <TableCell align="right">Week&nbsp;15</TableCell>
            <TableCell align="right">Week&nbsp;16</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.rubric}>
              <TableCell component="th" scope="row">
                {row.rubric}
              </TableCell>
              <TableCell align="right">{row.wk1}</TableCell>
              <TableCell align="right">{row.wk2}</TableCell>
              <TableCell align="right">{row.wk3}</TableCell>
              <TableCell align="right">{row.wk4}</TableCell>
              <TableCell align="right">{row.wk5}</TableCell>
              <TableCell align="right">{row.wk6}</TableCell>
              <TableCell align="right">{row.wk7}</TableCell>
              <TableCell align="right">{row.wk8}</TableCell>
              <TableCell align="right">{row.wk9}</TableCell>
              <TableCell align="right">{row.wk10}</TableCell>
              <TableCell align="right">{row.wk11}</TableCell>
              <TableCell align="right">{row.wk12}</TableCell>
              <TableCell align="right">{row.wk13}</TableCell>
              <TableCell align="right">{row.wk14}</TableCell>
              <TableCell align="right">{row.wk15}</TableCell>
              <TableCell align="right">{row.wk16}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
