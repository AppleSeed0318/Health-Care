const ctx = document.getElementById('health-chart');

const data = {
labels: ["Oct 2023", "Nov 2023","Dec 2023","Jan 2024","Feb 2024", "Mar 2024"],
datasets: [
    {
    label: 'Dataset 1',
    data: [100, 65, 110, 90, 70, 78, 180],
    borderColor: '#8C6FE6',
    backgroundColor: "#8C6FE6",
    tension: 0.4,
    },
    {
    label: 'Dataset 2',
    data: [120, 118, 160, 110, 150, 160],
    borderColor: '#E66FD2',
    backgroundColor: "#E66FD2",
    tension: 0.2,
    },
]
};

const config = {
type: 'line',
data: data,
options: {
    animations: {
    radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active
    }
    },
    radius: 6,
    hoverRadius: 8,
    hoverBackgroundColor: 'green',
    interaction: {
    mode: 'nearest',
    intersect: false,
    axis: 'x'
    },
    plugins: {
    legend: false,
    tooltip: {
        enabled: false
    }
    }
},
};


new Chart(ctx, config);
