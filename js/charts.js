document.addEventListener('DOMContentLoaded', () => {
    // Common Chart.js styling settings to match the dark glassmorphism theme
    Chart.defaults.color = 'rgba(255, 255, 255, 0.7)';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: 'rgba(255, 255, 255, 0.8)' }
            }
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                border: { dash: [5, 5] }
            },
            x: {
                grid: { display: false }
            }
        }
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: 'rgba(255, 255, 255, 0.8)', padding: 20 }
            }
        },
        borderWidth: 0
    };

    // -------------------------------------------------------------------------
    // PATIENT DASHBOARD CHARTS
    // -------------------------------------------------------------------------
    
    // 1. Blood Pressure History (Bar Chart)
    const userBarCtx = document.getElementById('userBarChart');
    if (userBarCtx) {
        new Chart(userBarCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Systolic (mmHg)',
                        data: [120, 118, 122, 119, 121, 118],
                        backgroundColor: 'rgba(0, 240, 255, 0.8)', // Cyan glow
                        borderRadius: 5,
                        barPercentage: 0.6
                    },
                    {
                        label: 'Diastolic (mmHg)',
                        data: [80, 78, 82, 79, 80, 78],
                        backgroundColor: 'rgba(0, 85, 255, 0.8)', // Deep blue
                        borderRadius: 5,
                        barPercentage: 0.6
                    }
                ]
            },
            options: commonOptions
        });
    }

    // 2. Appointments Breakdown (Pie Chart)
    const userPieCtx = document.getElementById('userPieChart');
    if (userPieCtx) {
        new Chart(userPieCtx, {
            type: 'doughnut',
            data: {
                labels: ['General Checkup', 'Lab Tests', 'Cardiology', 'Dental'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        'rgba(0, 240, 255, 0.8)',
                        'rgba(0, 85, 255, 0.8)',
                        'rgba(255, 77, 77, 0.8)',
                        'rgba(0, 255, 128, 0.8)'
                    ],
                    hoverOffset: 4,
                    borderWidth: 0
                }]
            },
            options: pieOptions
        });
    }

    // -------------------------------------------------------------------------
    // ADMIN DASHBOARD CHARTS
    // -------------------------------------------------------------------------

    // 1. Monthly Patient Admissions (Bar Chart)
    const adminBarCtx = document.getElementById('adminBarChart');
    if (adminBarCtx) {
        new Chart(adminBarCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Total Admissions',
                    data: [1250, 1400, 1350, 1600, 1850, 1700, 1900, 2100],
                    backgroundColor: 'rgba(0, 255, 128, 0.8)', // Green
                    borderRadius: 8,
                    barPercentage: 0.7
                }]
            },
            options: commonOptions
        });
    }

    // 2. Revenue by Department (Pie Chart)
    const adminPieCtx = document.getElementById('adminPieChart');
    if (adminPieCtx) {
        new Chart(adminPieCtx, {
            type: 'pie', // Using full pie for admin to differentiate from doughnut
            data: {
                labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology'],
                datasets: [{
                    data: [35, 20, 15, 18, 12],
                    backgroundColor: [
                        'rgba(0, 240, 255, 0.8)', // Cyan
                        'rgba(0, 85, 255, 0.8)',  // Deep Blue
                        'rgba(255, 77, 77, 0.8)', // Red
                        'rgba(255, 193, 7, 0.8)', // Yellow
                        'rgba(156, 39, 176, 0.8)' // Purple
                    ],
                    hoverOffset: 10,
                    borderWidth: 0
                }]
            },
            options: pieOptions
        });
    }
});
