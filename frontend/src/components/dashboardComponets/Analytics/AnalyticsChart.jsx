import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Verifications",
        data: [120, 190, 300, 250, 220, 180, 270],
        fill: false,
        textColor: "#fff",
        backgroundColor: "#fff",
        borderColor: "#fff",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
          callback: (value) => `${value}`, // Add text to numbers
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          lineWidth: 1,
        },
        border: {
          display: true,
          color: "#fff",
          width: 2,
          dash: [], // Solid line
        },
      },
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          lineWidth: 1,
        },
        border: {
          display: true,
          color: "#fff",
          width: 2,
          dash: [], // Solid line
        },
      },
    },
  };

  return (
    <div className="p-4  border border-gray-200 shadow-sm bg-primary-dark rounded-2xl dark:border-gray-700">
      <h4 className="mb-4 text-lg font-semibold text-white ">
        Weekly Verification Trends
      </h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
