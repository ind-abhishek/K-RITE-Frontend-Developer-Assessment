// Function For toggle dropdown visibility

let dropDown = function (i) {
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
};

let pressedBtn = document.getElementById("headBtn");
let listElements = document.getElementById("btnElement");

let pressedBtn1 = document.getElementById("headBtn1");
let listElements1 = document.getElementById("btnElement1");

let pressedBtn2 = document.getElementById("headBtn2");
let listElements2 = document.getElementById("btnElement2");

let pressedBtn3 = document.getElementById("headBtn3");
let listElements3 = document.getElementById("btnElement3");

let pressedBtn4 = document.getElementById("headBtn4");
let listElements4 = document.getElementById("btnElement4");

pressedBtn.addEventListener("click", function () {
  dropDown(listElements);
});

pressedBtn1.addEventListener("click", function () {
  dropDown(listElements1);
});

pressedBtn2.addEventListener("click", function () {
  dropDown(listElements2);
});

pressedBtn3.addEventListener("click", function () {
  dropDown(listElements3);
});

pressedBtn4.addEventListener("click", function () {
  dropDown(listElements4);
});

// Search Box

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let searchTerm = document.getElementById("searchInput").value.toLowerCase();

    let rows = document.querySelectorAll(".tableData tbody tr");

    // Loop through each row and hide/show based on search term
    rows.forEach(function (row) {
      let companyName = row
        .querySelector(".brand-Name")
        .textContent.toLowerCase();
      if (companyName.includes(searchTerm)) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  });

// SideBar

document.querySelectorAll("#Delete").forEach((button) => {
  button.addEventListener("click", function () {
    // Find the closest table row (parentElement) and remove it
    const row = this.closest("tr");
    if (row) {
      row.remove();
    }
  });
});
