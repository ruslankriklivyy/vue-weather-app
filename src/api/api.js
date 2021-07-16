import axios from 'axios';

const $api_id = '113193fbf09780b61264cc0a259fc574';

export const fetchCurrentWeather = (lat, lon) => {
  const res = axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${$api_id}`)
    .then(({ data }) => data);
  return res;
};

export const fetchGeolocation = () => {
  if (localStorage.getItem('geolocation')) {
    const obj = JSON.parse(localStorage.getItem('geolocation'));
    const loc = obj.loc.split(',');
    return loc;
  } else {
    return axios.get('https://api.ipify.org/?format=json').then(({ data }) => {
      let ip = null;
      if (data) {
        ip = data.ip;
      } else {
        ip = '46.133.170.246';
      }
      return axios.get(`https://ipinfo.io/${ip}?token=8e3c044be10c11`).then(({ data }) => {
        localStorage.setItem('geolocation', JSON.stringify(data));
        return data;
      });
    });
  }
};

export const fetchBySearchCity = (value) => {
  return axios
    .get(`https://rapidapi.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${value}`, {
      headers: {
        'x-rapidapi-key': '4897b78230mshf659a0b43a2289fp1b04f0jsn2d98e8d03585',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
    .then(({ data }) => {
      return data.data;
    });
};
