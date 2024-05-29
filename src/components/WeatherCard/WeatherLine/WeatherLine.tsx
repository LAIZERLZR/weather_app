import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherLine = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        position: 'top' as const,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            size: 14,
          },
          color: '#ADB5BD',
        },
      },
    },
  };

  const dataArr = [
    {
      label: 'Sun',
      topTemp: 63,
      bottomTemp: 57,
    },
    {
      label: 'Man',
      topTemp: 66,
      bottomTemp: 55,
    },
    {
      label: 'Tue',
      topTemp: 66,
      bottomTemp: 54,
    },
    {
      label: 'Web',
      topTemp: 66,
      bottomTemp: 54,
    },
    {
      label: 'Thur',
      topTemp: 68,
      bottomTemp: 54,
    },
  ];

  const labels = dataArr.map((data) => data.label);
  const topTemp = dataArr.map((data) => data.topTemp);
  const bottomTemp = dataArr.map((data) => data.bottomTemp);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'topTemp',
        data: topTemp,
        backgroundColor: 'white',
        borderColor: '#FFC801',
      },
      {
        label: 'bottomTemp',
        data: bottomTemp,
        backgroundColor: 'white',
        borderColor: '#EE3572',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default WeatherLine;
