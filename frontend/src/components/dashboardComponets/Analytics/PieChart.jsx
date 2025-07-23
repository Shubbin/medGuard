import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const data = {
    labels: ["Total Drugs", "Verified Drugs", "Reported Drugs"],
    datasets: [
      {
        label: "Drugs",
        data: [70, 40, 30],
        backgroundColor: ["#4A90E2", "#7ED321", "#D0021B"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <div>
      <h4 className="text-2xl font-semibold text-primary-dark">
        Drugs Statistics
      </h4>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
