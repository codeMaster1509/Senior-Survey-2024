var ctx = document.getElementById("doughnut16");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "I have never had sex",
      "Prefer not to answer",
      "Every week",
      "A few times a semester",
      "A few times a month",
      "Daily"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [145,57,26,20,15,4],
        borderWidth: 1,
        backgroundColor: [
          // "#350D20",
          // "#521B36",
          // "#662142",
          "#7D3055",
          "#8E3963",
          "#A24875",
          "#B85687",
          "#C06693",
          "#DA87B0",
          "#EEAACC",
          "#FCBFDD",
          "#FCD9EA",
          
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
