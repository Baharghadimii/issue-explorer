import React, { useState } from 'react';
import './Table.scss';
import TableRow from './TableRow';

const Table = (props) => {

  const select = (value) => {
    props.select(value);
  }
  return (
    <table className="table">
      <thead className='t-head'>
        <th className='head issues'>Issues</th>
        <th className='head status'>Status</th>
        <select className='drop' onChange={(e) => select(e.target.value)}>
          <option value='all'>All</option>
          <option value='open'>Open</option>
          <option value='close'>Close</option>
          <option value='pull'>Pull Re...</option>
        </select>
      </thead>
      <tbody className="tb-body">
        {props.data.list.map(item => {
          return (
            <TableRow category={item.category} title={item.title} link={item.link} status={item.state}>
            </TableRow>)
        })}
      </tbody>
    </table>
  )
}
export default Table;