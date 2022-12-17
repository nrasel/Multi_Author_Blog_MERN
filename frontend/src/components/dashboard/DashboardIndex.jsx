import React from "react";
import Chart from "react-apexcharts";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCaretSquareRight, FaRegUser, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardIndex = () => {
  const chartOptions = {
    series: [
      {
        name: "visitor",
        data: [100, 120, 90, 200, 244, 324, 123, 213, 342, 321, 133],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enable: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: "false",
      },
    },
  };
  return (
    <div className="dashboard-main-content-elements">
      <div className="dashboard-elements">
        <div className="cards">
          <div className="single-card">
            <div className="card-icon">
              <BsFillPeopleFill />
            </div>
            <div className="card-info">
              <h2>23</h2>
              <span>visitors</span>
            </div>
          </div>

          <Link to="/" className="single-card">
            <div className="card-icon">
              <BsFillPeopleFill />
            </div>
            <div className="card-info">
              <h2>23</h2>
              <span>Articles</span>
            </div>
          </Link>
          <Link to="/" className="single-card">
            <div className="card-icon">
              <FaRegCaretSquareRight />
            </div>
            <div className="card-info">
              <h2>23</h2>
              <span>Categories</span>
            </div>
          </Link>
          <Link to="/" className="single-card">
            <div className="card-icon">
              <FaTag />
            </div>
            <div className="card-info">
              <h2>23</h2>
              <span>Tags</span>
            </div>
          </Link>
          <Link to="/dashboard/all-sub-admin" className="single-card">
            <div className="card-icon">
              <FaRegUser />
            </div>
            <div className="card-info">
              <h2>23</h2>
              <span>Sub Admin</span>
            </div>
          </Link>
        </div>
        <div className="card-chart">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
