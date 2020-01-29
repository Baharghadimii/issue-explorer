import React from 'react';
import './Table.scss'

const Table = () => {
  return (
    <table className="table">
      <th className='head issues'>Issues</th>
      <th className='head status'>Status</th>
      <tbody>
        <tr className='row'>
          <td>1</td>
          <td>a</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Table;