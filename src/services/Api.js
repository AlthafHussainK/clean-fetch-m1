import axios from "axios";

const END_POINT =  'https://randomuser.me/api';

export async function fetchDataFromApi(noOfResults) {
  
  return await axios.get(`${END_POINT}/?results=${noOfResults}`)
        .then((res) => {
          const { results } = res.data
          return results
        }).catch((err) => {
          console.error(err)
        })
}



