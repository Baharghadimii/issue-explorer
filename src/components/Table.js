import React from 'react';
import './Table.scss';
import TableData from './TableRow';

const Table = () => {
  return (
    <table className="table">
      <th className='head issues'>Issues</th>
      <th className='head status'>Status</th>
      <tbody>
        <tr className='row'>
          <TableData className='tb-data td-issue'>1</TableData>
          <TableData className='tb-data td-status'>a</TableData>
        </tr>
      </tbody>
    </table>
  )
}
export default Table;