import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  const data = {
    labels: ["Total Drugs", "Verified Drugs", "Reported Drugs"],
    datasets: [
      {
        label: "Drugs",
        data: [70, 40, 30],
        backgroundColor: ["#4A90E2", "#7ED321", "#D0021B"],
        borderRadius: 20,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 30, // size of the colored box
          boxHeight: 20, // optional for more control
          usePointStyle: true,
          pointStyle: "roundedRect",
          padding: 20, // spacing between labels
          color: "#4B5563", // label text color (e.g., Tailwind's gray-700)
          font: {
            size: 14,
            weight: "bold",
            family: " Nunito Sans",
          },
        },
      },
    },
  };
  return (
    <div>
      <h4 className="text-2xl font-semibold text-primary-dark">
        Drugs Statistics
      </h4>
      <Doughnut data={data} options={options} height={10} width={10} />
    </div>
  );
};

export default DoughnutChart;
