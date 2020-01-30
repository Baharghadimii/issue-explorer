import React from 'react';
import './TableRow.scss';
import Octicon, { IssueClosed, IssueOpened, GitPullRequest } from '@github/octicons-react';

export default function TableData(props) {
  return <tr>
    <td className='tb-data td-issue'>{props.data.title}</td>
    {props.status === 'open' && <spen style={{ color: 'green' }}><Octicon icon={IssueClosed} /></spen>}
    {props.status === 'closed' && <spen style={{ color: 'red' }}><Octicon icon={IssueOpened} /></spen>}
  </tr>
};