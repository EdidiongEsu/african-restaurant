$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  //Animation on Scroll library(AOS)
  AOS.init({
    easing: "ease",
    duration: 1000,
  });

  // Creating a datetimepicker

  $("#datetimepicker").datetimepicker({
    // format: 'YYYY/MM/DD'
    debug: true,
    icons: {
      time: "far fa-clock",
      date: "fa fa-calendar",
      dateformat: "DD / MM / YYYY",
      up: "fas fa-arrow-up",
      down: "fas fa-arrow-down",
      previous: "fas fa-chevron-left",
      next: "fas fa-chevron-right",
      today: "far fa-calendar-check-o",
      clear: "far fa-trash",
      close: "fa fa-times",
    },
    locale: "en",
    allowInputToggle: true,
    minDate: moment(),
    stepping: 15,
    showClose: true,
  });
});

//--------------Web Interaction-------------------------
//Variables
const meals = document.querySelector("#menu-list"),
  trayContent = document.querySelector("#tray-content tbody");

//Event Listeners
loadEventListeners();

function loadEventListeners() {
  meals.addEventListener("click", buyMeal);
}

//Functions
function buyMeal(e) {
  e.preventDefault();
  //console.log(e.target.classList);
  if (e.target.classList.contains("add-to-tray")) {
    const meal = e.target.parentElement.parentElement; //get parent element

    getMealInfo(meal);
  }
}

function getMealInfo(meal) {
  const mealInfo = {
    title: meal.querySelector("h1").textContent,
    price: meal.querySelector("h6").textContent,
    image: meal.previousElementSibling.querySelector("img").src,
    id: meal.querySelector("a").getAttribute("data-id"),
  };

  console.log(mealInfo);

  addIntoTray(mealInfo);
}

function addIntoTray(meal) {
  //Create the html to be used in the table to replace the empty spaces

  row = document.createElement("tr");

  row.innerHTML = `
  <tr>
    <td>
      <img src= "${meal.image}" width=70 height=50>
    </td>
    <td style="fontsize:10px">${meal.title}</td>
    <td>${meal.price}</td>
    <td>
      <a href="#" class="remove" data-id= "${meal.id}">X</a> 
    </td>
  </tr>
  `;

  trayContent.append(row);
}
