import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {


  function getIssues(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/issues`)
      .then(res => {
        return res.data;
      });
  }
  function getPullRequest(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/pulls`)
      .then(res => {
        return res.data
      });
  }
  return { getIssues, getPullRequest }
}