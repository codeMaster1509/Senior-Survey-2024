var ctx = document.getElementById("doughnut8");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Yes, all of them",
      "Only if attendance was taken",
      "Rarely, depended on my mood",
      "Yes, only to fall asleep",
      "I didn't need classes"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [105, 75, 73, 29, 8],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          "#13344C",
          
          "#295574",
          "#37617F",
          
          "#7092AA",
          "#89A6BB",
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
