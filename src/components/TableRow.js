import React from 'react';
import './TableRow.scss';
import Octicon, { IssueClosed, IssueOpened, GitPullRequest } from '@github/octicons-react';

export default function TableData(props) {
  return (
    <tr className='row'>
      <a className="link" href={props.link}><td className='tb-data'>{props.title}</td></a>
      {props.category === 'pull' && <td><Octicon icon={GitPullRequest} size={20} style={{ float: 'centre' }} /></td>}
      {props.status === 'open' && props.category !== 'pull' && <td><spen style={{ color: 'green', float: 'centre' }}><Octicon size={20} icon={IssueClosed} /></spen></td>}
      {props.status === 'closed' && !props.pull && <td><spen style={{ color: 'red', float: 'centre' }}><Octicon size={20} icon={IssueOpened} /></spen></td>}
    </tr>)
};