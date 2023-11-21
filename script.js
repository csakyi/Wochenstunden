const weeklyHoursCurrYear = [
  40, 42, 38, 39, 40, 40, 41, 45, 90, 10, 41, 35, 41, 32, 41, 35, 41, 32, 41,
  35, 41, 32, 40, 42, 38, 39, 40, 40, 41, 45, 90, 10, 41, 35, 41, 32, 41, 35,
  41, 32, 41, 35, 41, 32, 45, 47, 37, 32,
];

function createTable() {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const tableBody = document.querySelector("tbody");

  months.forEach((month, index) => {
    const row = document.createElement("tr");
    const monthCell = document.createElement("td");
    monthCell.textContent = month;
    row.appendChild(monthCell);

    for (let i = 0; i < 4; i++) {
      const weekCell = document.createElement("td");
      weekCell.textContent = weeklyHoursCurrYear[index * 4 + i].toString();
      row.appendChild(weekCell);
    }

    tableBody.appendChild(row);
  });
}

createTable();
