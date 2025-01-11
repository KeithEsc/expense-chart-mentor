import "./App.css";
import logo from "./assets/logo.svg";
import ChartComponent from "./ChartComponent"; // Import the chart component

function SimplePage() {
  return (
    <div className="container">
      <div className="top">
        <div className="top-text">
          <p className="label">My balance</p>
          <p className="amount">$921.48</p>
        </div>
        <div>
          <img src={logo} alt="logo" className="Logo" />
        </div>
      </div>
      <div className="bottom">
        <p className="bottom-text_top">Spending - Last 7 days</p>
        <div className="chart">
          <ChartComponent />
        </div>
        <div className="line"></div>
        <div className="bottom-text">
          <div className="bottom-text_left">
            <p className="total">Total this month</p>
            <p className="total-amount">$478.33</p>
          </div>
          <div className="bottom-text_right">
            <p className="percent">+2.4%</p>
            <p className="percent-from">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimplePage;
