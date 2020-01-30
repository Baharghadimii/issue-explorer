import React, { useState } from 'react';
import './Table.scss';
import TableRow from './TableRow';


const Table = (props) => {

  const select = (value) => {
    props.select(value);
  }
  console.log(props.filter.open)
  return (
    <table className="table">
      <th className='head issues'>Issues</th>
      <select onChange={(e) => select(e.target.value)}>
        <option value='all'>All</option>
        <option value='open'>Open</option>
        <option value='close'>Close</option>
        <option value='pull'>Pull Request</option>
      </select>
      <tbody>

        {(props.filter.open || props.filter.all) && props.data.issues.map(item => {
          if (item.issue.state === 'open') {
            return (
              <TableRow className='row' data={item.issue} status={item.issue.state}>
              </TableRow>)
          }
        })}

        {(props.filter.close || props.filter.all) && props.data.issues.map(item => {
          if (item.issue.state === 'closed') {
            return (
              <TableRow className='row' data={item.issue} status={item.issue.state}>
              </TableRow>)
          }
        })}
        {(props.filter.pull || props.filter.all) && props.data.pull.map(item => {
          return (
            <TableRow className='row' pull={true} data={item} status={item.state}>
            </TableRow>)
        })}
      </tbody>
    </table>
  )
}
export default Table;