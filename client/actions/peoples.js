import axios from 'axios';
import { SET_PEOPLES_DETAIL } from './types';

export function setPeoplesList(peoples) {
  return {
    type: SET_PEOPLES_DETAIL,
    peoples
  };
}

export function getPeoplesList(page) {
  page = page || 1;
  return dispatch => {
    return axios.get(`http://swapi.co/api/people/?page=${page}`).then(res => {
      dispatch(setPeoplesList(res.data));
    });
  }
}
export function searchPeoples(value, page) {
  value = value || '';
  page = page || 1;
  return dispatch => {
    return axios.get(`http://swapi.co/api/people/?page=${page}&search=${value}`).then(res => {
      dispatch(setPeoplesList(res.data));
    });
  }
}