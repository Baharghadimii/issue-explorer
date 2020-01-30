import axios from 'axios';

export default function useApplicationData() {


  function getOpenIssues(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/issues`)
      .then(res => {
        return res.data;
      });
  }
  function getClosedIssues(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/issues/events`)
      .then(res => {
        return res.data;
      });
  }
  function getPullRequests(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/pulls`)
      .then(res => {
        return res.data;
      });
  }
  return { getOpenIssues, getClosedIssues, getPullRequests }
}