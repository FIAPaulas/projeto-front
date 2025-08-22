 const cpuChart = new Chart(document.getElementById('cpuChart'), {
      type: 'line',
      data: {
        labels: ['5min', '4min', '3min', '2min', '1min', 'Agora'],
        datasets: [{
          label: 'Uso de CPU (%)',
          data: [60, 62, 65, 67, 70, 65],
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      }
    });

    const networkChart = new Chart(document.getElementById('networkChart'), {
      type: 'bar',
      data: {
        labels: ['5min', '4min', '3min', '2min', '1min', 'Agora'],
        datasets: [{
          label: 'Tráfego de Rede (MB/s)',
          data: [10, 20, 15, 25, 30, 22],
          backgroundColor: 'rgba(153, 102, 255, 0.6)'
        }]
      }
    });
