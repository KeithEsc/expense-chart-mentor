import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
  TooltipModel,
} from "chart.js";
import data from "./data.json";

// Register the components
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent: React.FC = () => {
  const labels = data.map((item) => item.day);
  const values = data.map((item) => item.amount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Spending ($)",
        data: values,
        backgroundColor: "hsl(10, 79%, 65%)",
        borderRadius: 5,
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 1,
        position: "nearest",
        padding: 10,
        titleFont: {
          size: 24,
          weight: "bold",
          family: "Inter",
        },
        displayColors: false,
        bodyFont: {
          size: 16,
          family: "Arial",
          weight: "normal",
        },
        callbacks: {
          title: () => "",
          label: (tooltipItem: TooltipItem<"bar">) => {
            return `$${tooltipItem.raw} `;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Bar data={chartData} options={options} />
      <div
        id="chartjs-tooltip"
        style={{ opacity: 0, transition: "opacity 0.1s ease" }}
      ></div>
    </div>
  );
};

export default ChartComponent;
