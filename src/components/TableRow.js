import React from 'react';
import './TableRow.scss';

export default function TableData(props) {
  console.log(props.title);
  return <td className='tb-data td-issue'>{props.title}</td>
};