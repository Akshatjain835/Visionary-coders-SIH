// Chart.js - Academic Performance Chart
const ctx1 = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
        datasets: [{
            label: 'Average GPA',
            data: [3.2, 3.4, 3.6, 3.8],
            backgroundColor: '#4CAF50',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Research Publications Chart
const ctx2 = document.getElementById('researchChart').getContext('2d');
const researchChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Journal', 'Conference', 'Workshop'],
        datasets: [{
            data: [40, 30, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    },
    options: {
        responsive: true
    }
});

// Financial Overview Chart
const ctx3 = document.getElementById('financeChart').getContext('2d');
const financeChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Expenses',
            data: [50000, 60000, 70000, 80000],
            backgroundColor: '#FF5722',
            fill: false,
            borderColor: '#FF5722',
        }, {
            label: 'Revenue',
            data: [60000, 70000, 80000, 90000],
            backgroundColor: '#009688',
            fill: false,
            borderColor: '#009688',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Simulate report generation
function generateReport() {
    alert('Generating Annual Report...');
}
