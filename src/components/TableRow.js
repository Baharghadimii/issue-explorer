import React from 'react';
import './TableRow.scss';
import Octicon, { IssueClosed, IssueOpened, GitPullRequest } from '@github/octicons-react';

export default function TableData(props) {
  return <tr>
    <td className='tb-data td-issue'>{props.data.title}</td>
    {props.status === 'open' && props.pull && <spen style={{ color: 'green' }}><Octicon icon={GitPullRequest} /></spen>}
    {props.status === 'closed' && props.pull && <spen style={{ color: 'red' }}><Octicon icon={GitPullRequest} /></spen>}
    {props.status === 'open' && !props.pull && <spen style={{ color: 'green' }}><Octicon icon={IssueClosed} /></spen>}
    {props.status === 'closed' && !props.pull && <spen style={{ color: 'red' }}><Octicon icon={IssueOpened} /></spen>}
  </tr>
};