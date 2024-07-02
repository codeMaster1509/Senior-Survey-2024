var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "H3",
      "H6",
      "H5",
      "H15",
      "H2",
      "H9",
      "H11",
      "H18",
      "H10",
      "H17",
      "H12",
      "H14",
      "H4",
      "H13"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [40,36,30,30,28,23,17,17,14,12,12,11,7,6],
        borderWidth: 1,
        backgroundColor: [
          // "#382D07",
          // "#46390D",
          // "#726122",
          // "#937B26",
          // "#A78B23",
          // "#B89C34",
          // "#CDB044",
          // "#DBBF59",
          "#E8CE6A",
          // "#F2D97F",
          // "#FDE694",
          // "#FFEEAE",
          
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
