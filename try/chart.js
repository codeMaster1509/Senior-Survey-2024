document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('gpaChart').getContext('2d');
    var gpaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2.5 and below', '2.6 - 2.7', '2.8 - 2.9', '3.0 - 3.1', '3.2 - 3.3', '3.4 - 3.5', '3.6 - 3.7', '3.8 - 3.9', '4.0'],
            datasets: [
                {
                    label: 'Regular Decision',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: [0.8, 0.4, 0.0, 0.0, 0.8, 4.8, 7.7, 18.1, 25.8]
                },
                {
                    label: 'Early Action',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: [0.5, 0.3, 0.0, 0.1, 1.0, 5.0, 8.0, 19.0, 26.0]
                },
                {
                    label: 'Waitlisted then Accepted',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    data: [0.6, 0.4, 0.0, 0.0, 0.9, 4.9, 7.8, 18.5, 25.9]
                },
                {
                    label: 'QuestBridge',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [0.7, 0.5, 0.0, 0.0, 1.2, 5.2, 8.1, 19.3, 26.3]
                },
                {
                    label: 'Transfer',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    data: [0.4, 0.3, 0.0, 0.1, 0.8, 4.8, 7.7, 18.1, 25.8]
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
});
// </script>
