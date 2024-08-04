var ctx = document.getElementById("doughnut8");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Somewhat dissatisfied, looked for excuses to eat outside",
      "Neutral, I can eat whatever",
      "Satisfied, preferred to eat in the mess",
      "Dissatisfied, it led me to opt out from the mess"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [123,88,43,34],
        borderWidth: 1,
        backgroundColor: [
          // "#382D07",
          // "#46390D",
          "#726122",
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
