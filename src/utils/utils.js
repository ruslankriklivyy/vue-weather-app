export const getCreatedTime = (time) => {
  const newTime = new Date(time);
  return `${newTime.getHours()}:${
    newTime.getMinutes() < 10 ? `0${newTime.getMinutes()}` : `${newTime.getMinutes()}`
  }`;
};

export const getTemp = (currentUnit, temp) => {
  if (currentUnit === 'C') {
    return Math.round(temp - 273.15);
  } else {
    return Math.round(1.8 * (temp - 273.15) + 32);
  }
};
