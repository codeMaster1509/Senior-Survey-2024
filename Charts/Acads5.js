var ctx = document.getElementById("doughnut5");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "5.0",
      "4.0",
      "3.0",
      "2.0",
      "1.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [98, 122, 53, 12, 4],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          
          "#1E4460",
          
          "#37617F",
          "#4F7793",
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
