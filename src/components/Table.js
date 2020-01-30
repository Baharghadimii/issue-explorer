import React, { useState } from 'react';
import './Table.scss';
import TableRow from './TableRow';


const Table = (props) => {

  const select = (value) => {
    props.select(value);
  }
  console.log(props.filter.open)
  return (
    // <div>
    <table className="table">
      <th className='head issues'>Issues</th>
      <th className='head status'>Status</th>
      <select onChange={(e) => select(e.target.value)}>
        <option value='all'>All</option>
        <option value='open'>Open</option>
        <option value='close'>Close</option>
        <option value='pull'>Pull Request</option>
      </select>
      <tbody className="tb-body">
        {props.data.list.map(item => {
          return (
            <TableRow category={item.category} title={item.title} status={item.state}>
            </TableRow>)
        })}
      </tbody>
    </table>
    // </div >
  )
}
export default Table;