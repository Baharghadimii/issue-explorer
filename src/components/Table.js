import React, { useState, useEffect } from 'react';
import './Table.scss';
import TableRow from './TableRow';


const Table = (props) => {

  return (
    <table className="table">
      <th className='head issues'>Issues</th>
      <tbody>
        {props.data.openIssues.map(item => {
          console.log(item);
          return (
            <TableRow className='row' data={item} status={item.state}>
            </TableRow>)
        })}
        {props.data.closedIssue.map(item => {
          console.log(item);
          return (
            <TableRow className='row' data={item.issue} status={item.issue.state} pull={item.issue.pull_request}>
            </TableRow>)
        })}
        {props.data.pull.map(item => {
          console.log(item);
          return (
            <TableRow className='row'>
            </TableRow>)
        })}
      </tbody>
    </table>
  )
}
export default Table;