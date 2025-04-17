const button = document.getElementById("Search");
const input = document.getElementById("city-name");

const cityName = document.getElementById("country-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityname) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=0cf6c445c3ef4f65891184114251604&q=${cityname}&aqi=yes
 `);
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);

  cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});
