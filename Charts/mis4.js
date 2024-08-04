var ctx = document.getElementById("doughnut4");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "No, I never tried",
      "I tried but didn't get selected",
      "Yes, at inter-IIT cult",
      "Yes, at inter IIT tech",
      "Yes, at inter-IIT sports"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [192,37,26,22,12],
        borderWidth: 1,
        backgroundColor: [
          // "#382D07",
          
          "#937B26",
          "#A78B23",
          "#B89C34",
          "#CDB044",
          "#DBBF59",
          "#E8CE6A",
          "#F2D97F",
          "#FDE694",
          "#FFEEAE",
          
        ],
      },
    ],
  },
  options: {
    plugins: {
      
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
