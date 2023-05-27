import React from "react";
import classes from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { chartData } from "../../components/Headergraph";
import ReactApexChart from "react-apexcharts";


const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.indexFundInfo}>
        <div className={[classes.infoTab1, classes.infoTabs].join(" ")}>
          <div className={classes.infoTitle}>BSE Ltd</div>
          <div className={classes.infoNum}>313.423.54</div>
          <div className={classes.graph1}>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={80}
              width={123}
              style={{ top: "-34px", left: "-12px", position: "relative" }}
            />
          </div>
          <div className={classes.graph2}>
            
          </div>
        </div>
        <div className={[classes.infoTab2, classes.infoTabs].join(" ")}>
        <div className={classes.infoTitle}>Nifty 50</div>
        <div className={classes.infoNum}>313.423.54</div>
          <div className={classes.graph1}>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={80}
              width={123}
              style={{ top: "-34px", left: "-12px", position: "relative" }}
            />
          </div>
          <div className={classes.graph2}>
            {/* <img src={graph} className={classes.graphImage} alt="" /> */}
          </div>
        </div>
      </div>
      <div className={classes.searchbox}>
        <div className={classes.searchicon}>
          <SearchIcon fontSize="large" />
        </div>
        <div className={classes.notification}>
          <div className={classes.bell}>
            <NotificationsIcon fontSize="small" />
          </div>
          <div className={classes.number}>21</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
