function updateTime() {
  let tokyoDateElement = document.querySelector("#tokyoDate");
  let tokyoTimeElement = document.querySelector("#tokyoTime");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let sydneyDateElement = document.querySelector("#sydneyDate");
  let sydneyTimeElement = document.querySelector("#sydneyTime");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let berlinDateElement = document.querySelector("#berlinDate");
  let berlinTimeElement = document.querySelector("#berlinTime");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function showCityData(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city-selected");

  if (event.target.value.length > 0) {
    let cityTime = moment().tz(event.target.value);

    citiesElement.innerHTML = `
    <div class="cityInfo">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small>
     </div>`;
  } else {
    citiesElement.innerHTML = `
    <div class="cityInfo">
     </div>`;
  }
}
updateTime();
setInterval(updateTime, 1000);
setInterval(showCityData, 1000);

let citySelector = document.querySelector("#city-dropdown");
citySelector.addEventListener("change", showCityData);
