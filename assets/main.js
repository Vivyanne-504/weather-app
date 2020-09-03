const APIURL= 'https://www.metaweather.com/api/';
async function getWeatherByLocation() {
  const resp = await fetch(APIURL+'/location/search/?query='+location);
const respData = await resp.json();



}
getWeatherByLocation('Lagos')

