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

// -----Shorting--

let sorted = false; // Variable to track sorting state

// Function to sort and rearrange table rows alphabetically
function sortTableRows() {
  // Get all the table rows except the header row
  const rows = Array.from(
    document.querySelectorAll(".tableData tbody tr")
  ).slice(0);

  // Extract brand names from each row and store them in an array
  const brands = rows.map((row) => {
    return {
      brandName: row.querySelector(".brand-Name").textContent.trim(),
      row: row,
    };
  });

  // Sort the array of brands alphabetically by brand name
  brands.sort((a, b) => a.brandName.localeCompare(b.brandName));

  // Rearrange the table rows based on the sorted array
  const tableBody = document.querySelector(".tableData tbody");
  tableBody.innerHTML = ""; // Clear the table body
  brands.forEach((item) => {
    tableBody.appendChild(item.row);
  });

  sorted = true; // Set sorting state to true
}

// Function to revert to the original order of table rows
function unsortTableRows() {
  // Get all the table rows except the header row
  const rows = Array.from(
    document.querySelectorAll(".tableData tbody tr")
  ).slice(0);

  // Rearrange the table rows back to their original order
  const tableBody = document.querySelector(".tableData tbody");
  tableBody.innerHTML = ""; // Clear the table body
  rows.forEach((row) => {
    tableBody.appendChild(row);
  });

  sorted = false; // Set sorting state to false
}

// Add event listener to the button that toggles sorting
document.querySelector("#sortButton").addEventListener("click", function () {
  if (sorted) {
    unsortTableRows(); // If sorted, unsort the table rows
  } else {
    sortTableRows(); // If not sorted, sort the table rows
  }
});
