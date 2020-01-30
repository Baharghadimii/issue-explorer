import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {


  function getIssues(owner, repo) {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`)
      .then(res => {
        return res.data;
      });
  }
  function getPullRequest() {
    return axios.get('https://api.github.com/repos/ZSully09/To-Do-List/issues')
      .then(res => {
        // dispatch({ type: GET_STATUS, status: res })
      });
  }
  return { getIssues, getPullRequest }
}