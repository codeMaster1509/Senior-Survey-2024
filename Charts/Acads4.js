var ctx = document.getElementById("doughnut4");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "5",
      "4",
      "3",
      "2",
      "1"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [64, 85, 73, 46, 23],
        borderWidth: 1,
        backgroundColor: [
          
          
          "#13344C",
          
          "#295574",
         
          "#4F7793",
          
          
          "#A4BCCC",
          "#C4D4E1",
        ],
      },
    ],
  },
  options: {
    plugins: {
    //   legend: {
    //     display: true,
    //     position: "right",
    //   },
      datalabels: {
        color: "#fff", // Color of the labels
        anchor: "end", // Anchor the label position at the end of the arc
        align: "start", // Align the label text start
        offset: -10, // Offset the labels to avoid overlapping
        formatter: function (value, context) {
          return value; // Display the data value
        }
      }
    }
  }
});
