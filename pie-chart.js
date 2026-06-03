const ctx = document.getElementById("pie-chart");

export  function createPieChart(stats) {
    new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Applied', 'Interviewing', 'Offers', 'Rejected'],
        datasets: [{
        label: 'Application Status',
        data: stats,
        backgroundColor: [
            '#388DF8',
            '#FBBF24',
            '#4ADE80',
            '#F87171'
        ]
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            title: {
                color: 'white',
                display: true,
                text: "Application status"
            },
            legend:{
                position: 'right',
                labels: {
                    color: 'white',
                    boxWidth: 10,
                    boxHeight: 10
                }
            }
        }
    }
    });
};