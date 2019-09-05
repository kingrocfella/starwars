import axios from 'axios';
const baseURL = "https://swapi.co/api"

export default {
  getAllPeople(){
    return axios({
      method: 'get',
      url: `${baseURL}/people`
    });
  },
  navigateTo(route){
    return axios({
      method: 'get',
      url: route
    });
  },
  searchPeople(name){
    return axios({
      method: 'get',
      url: `${baseURL}/people?search=${name}`
    });
  },
  getAllStarships(){
    return axios({
      method: 'get',
      url: `${baseURL}/starships`
    });
  },
  searchStarships(name){
    return axios({
      method: 'get',
      url: `${baseURL}/starships?search=${name}`
    });
  },
}
