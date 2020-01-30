import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {


  function getIssues() {
    return axios.get('https://api.github.com/repos/ZSully09/To-Do-List/issues')
      .then(res => {
        return res.data;
      });
  }
  function getStatus() {
    return axios.get('https://api.github.com/repos/ZSully09/To-Do-List/issues')
      .then(res => {
        // dispatch({ type: GET_STATUS, status: res })
      });
  }
  return { getIssues, getStatus }
}