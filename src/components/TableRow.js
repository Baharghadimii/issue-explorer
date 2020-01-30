import React from 'react';
import './TableRow.scss';
import Octicon, { IssueClosed, IssueOpened, GitPullRequest } from '@github/octicons-react';

export default function TableData(props) {
  return (
    <tr className='row'>
      <td className='tb-data'>{props.title}</td>
      {props.category === 'pull' && <td><Octicon icon={GitPullRequest} style={{ float: 'centre' }} /></td>}
      {props.status === 'open' && props.category !== 'pull' && <td><spen style={{ color: 'green', float: 'centre' }}><Octicon icon={IssueClosed} /></spen></td>}
      {props.status === 'closed' && !props.pull && <td><spen style={{ color: 'red', float: 'centre' }}><Octicon icon={IssueOpened} /></spen></td>}
    </tr>)
};