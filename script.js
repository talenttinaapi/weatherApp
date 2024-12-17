document.addEventListener("DOMContentLoaded", () => {
    const changeCityButton = document.getElementById("change-city-btn");
    const currentCityElement = document.getElementById("current-city");
  
    // Event Listener for Change City Button
    changeCityButton.addEventListener("click", () => {
      const newCity = prompt("Enter a new city name:");
      if (newCity) {
        currentCityElement.textContent = `Currently 21° in ${newCity}`;
      }
    });
  });
  