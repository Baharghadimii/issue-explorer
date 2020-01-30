import axios from 'axios';

export default function useApplicationData() {

  function getOpenIssues(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/issues?state=open`)
      .then(res => {
        const result = [];
        res.data.forEach(element => {
          const temp = {};
          temp['title'] = element.title || element.issue.title;
          temp['category'] = 'open';
          temp['state'] = element.state || element.issue.state;
          temp['link'] = element.html_url
          result.push(temp);
        });
        return result;
      });
  }
  function getClosedIssues(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/issues?state=closed`)
      .then(res => {
        const result = [];
        res.data.forEach(element => {
          const temp = {};
          temp['title'] = element.title || element.issue.title;
          temp['category'] = 'close';
          temp['state'] = element.state || element.issue.state;
          temp['link'] = element.html_url
          result.push(temp);
        });
        return result;
      });
  }
  function getPullRequests(ownerRepo) {
    return axios.get(`https://api.github.com/repos/${ownerRepo}/pulls`)
      .then(res => {
        const result = [];
        res.data.forEach(element => {
          const temp = {};
          temp['title'] = element.title || element.issue.title;
          temp['category'] = 'pull';
          temp['state'] = element.state || element.issue.state;
          temp['link'] = element.html_url
          result.push(temp);
        });
        return result;
      });
  }
  function setList(ownerRepo) {
    return Promise.all([
      Promise.resolve(getOpenIssues(ownerRepo)),
      Promise.resolve(getClosedIssues(ownerRepo)),
      Promise.resolve(getPullRequests(ownerRepo)),
    ]).then(all => {
      return { list: all[0].concat(all[1]).concat(all[2]) }
    });
  }
  return { setList }
}