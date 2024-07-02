var ctx = document.getElementById("doughnut6");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "I was and I still am",
      "I was, but not anymore",
      "I was never interested",
      "I was not before, now I am"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [134, 77, 65, 12],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
         
          "#1E4460",
          
          "#37617F",
          "#4F7793",
          // "#7092AA",
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
