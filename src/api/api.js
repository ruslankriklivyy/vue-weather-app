import axios from 'axios';

const $api_id = '113193fbf09780b61264cc0a259fc574';

export const fetchCurrentWeather = async (lat, lon) => {
  const res = await axios
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
        return data.loc.split(',');
      });
    });
  }
};

// export const fetchWeatherWeek = async (lat, lon) => {
//   const res = await axios
//     .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${$api_id}`)
//     .then(({ data }) => data);
//   console.log(res);
//   return res;
// };
