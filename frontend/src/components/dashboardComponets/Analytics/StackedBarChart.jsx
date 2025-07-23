import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 8, 16, 23, 8, 9, 0, 0, 0, 0, 0],
        backgroundColor: [
          "#D0021B",
          "#4A90E2",
          "#7ED321",
          "#D0021B",
          "#4A90E2",
          "#7ED321",
          "#D0021B",
          "#4A90E2",
          "#7ED321",
          "#D0021B",
          "#4A90E2",
          "#7ED321",
        ],
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Monthly User Statistics",
        font: { size: 18, weight: "bold", family: "Nunito Sans" },
        color: "#4A90E2",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded-2xl dark:shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
