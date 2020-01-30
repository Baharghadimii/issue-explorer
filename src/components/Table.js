import React from 'react';
import './Table.scss';
import TableData from './TableRow';

const Table = (props) => {
  return (
    <table className="table">
      <th className='head issues'>{props.name}</th>
      <th className='head status'>Status</th>
      <tbody>

        {props.data.map(item => {
          console.log(item);
          return (
            <tr className='row'>
              <TableData title={item.title}></TableData>
              <Octicon icon={Icon} />
            </tr>)
        })}

      </tbody>
    </table>
  )
}
export default Table;