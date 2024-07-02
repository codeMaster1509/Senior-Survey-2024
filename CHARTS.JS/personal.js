const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    function wrapText(text, maxWidth) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = currentLine.length + word.length + 1; // +1 for space

            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    // Chart data for all charts
    const chartData = [
        //chart 1
        {
            labels: ['Female', 'Male','Thats the most stupid question influenced by the western world. Didnt expect this question from such institution of such a wonderful country. There is no identification. I am a male' ],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    data: [18, 54, 0]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                    data: [22, 85, 0]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    data: [13, 27, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    data: [8, 59, 1]
                }
            ]
        },

        // Chart 2
    {
        labels: ['Considered but never received counselling/therapy, people around me helped', 'No, I never felt the need to', 'Yes, availed services at the SWC', 'Yes, availed services outside the institute'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [17, 41, 10, 4]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [34, 57, 8, 7]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [11, 14, 11, 3]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [13, 46, 5, 3]
            }
        ]
    },


    //chart 3 :
    
                {
                    labels: ['Considered but never received counselling/therapy, people around me helped', 'No, I never felt the need to', 'Yes, availed services at the SWC', 'Yes, availed services outside the institute'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            data: [22, 21, 10, 7 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: 'rgba(255, 206, 86, 0.5)',
                            data: [53, 136, 26, 10 ]
                        },
        
                    ]
                }, 

        
                // chart 4
                {
                    labels: ['I am in a relationship, and my partner is from IITB', 'I am in a relationship, and my partner is not form IITB', 'Its complicated', 'Other', 'Single'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            data: [26, 8, 1, 0, 26 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: 'rgba(255, 206, 86, 0.5)',
                            data: [26, 38, 10, 4, 139 ]
                        },
        
                    ]
                },           

        // Chart 5
    {
        labels: ['Before coming to IIT', 'During my first year at IIT', 'I never consumed alcohol', 'Post my first year at IIT'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [6, 5, 27, 33]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [19, 4, 41, 37]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [6, 5, 10, 19]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [12, 5, 33, 17]
            }
        ]
    },

        // Chart 6
    {
        labels: ['Every month', 'Never', 'Occasionally', 'Once a week', 'Only once', 'Very often'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [4, 28, 29, 3, 4, 3]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [8, 42, 37, 7, 9, 0]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [3, 13, 16, 3, 2, 2]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [6, 36, 9, 8, 6, 1]
            }
        ]
    },
        // Add more charts here as needed
    ];

    // Chart options (common for all charts)
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    callback: function(value, index, values) {
                        const label = this.getLabelForValue(value);
                        return wrapText(label, 30); // Adjust 30 to your desired max width per line
                    }
                }
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                display: false
            }
        }
    };

    // Initialize all charts dynamically
    const charts = [];
    chartData.forEach((data, index) => {
        const chartContainerId = `chartContainer${index + 1}`;
        const chartContainer = document.getElementById(chartContainerId);
        if (chartContainer) {
            const ctx = chartContainer.getContext('2d');
            charts.push(new Chart(ctx, {
                type: 'bar',
                data: data,
                options: chartOptions
            }));
        }
    });

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.legend');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const datasetIndex = parseInt(button.getAttribute('data-dataset'));
            const chartIndex = parseInt(button.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            charts[chartIndex].data.datasets.forEach((dataset, i) => {
                dataset.hidden = i !== datasetIndex;
            });

            charts[chartIndex].update();

            const chartButtons = button.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn, idx) => {
                btn.classList.toggle('active', idx === datasetIndex);
            });
        });
    });

    // Add event listener to all reset buttons
    const resetButtons = document.querySelectorAll('.reset-button');
    resetButtons.forEach((resetButton) => {
        resetButton.addEventListener('click', () => {
            const chartIndex = parseInt(resetButton.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            const originalData = JSON.parse(JSON.stringify(chartData[chartIndex]));

            charts[chartIndex].data.datasets.forEach((dataset, datasetIndex) => {
                dataset.data = [...originalData.datasets[datasetIndex].data]; // Clone the original data
                dataset.hidden = false; // Ensure all datasets are visible after reset
            });

            charts[chartIndex].update(); // Update chart with original data

            const chartButtons = resetButton.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn) => {
                btn.classList.remove('active');
            });
        });
    });
});
