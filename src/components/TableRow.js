import React from 'react';
import './TableRow.scss';
import Octicon, { IssueClosed, IssueOpened, GitPullRequest } from '@github/octicons-react';

export default function TableData(props) {
  return <tr>
    <td className='tb-data td-issue'>{props.title}</td>
    {props.category === 'pull' && <Octicon icon={GitPullRequest} />}
    {props.status === 'open' && props.category !== 'pull' && <spen style={{ color: 'green' }}><Octicon icon={IssueClosed} /></spen>}
    {props.status === 'closed' && !props.pull && <spen style={{ color: 'red' }}><Octicon icon={IssueOpened} /></spen>}
  </tr>
};