import React from "react";
import classes from "./Details.module.scss";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { chartData2 } from "../../components/Bargraph";
import { chartData3 } from "../../components/Maingraph";



const Details = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.detailsTitle}>
        <h3 className={classes.stockName}>INFOSYS</h3>
        <div className={classes.stockSubname}>INFY|LTD</div>
      </div>

      <div className={classes.detailsGraph}>
        <ReactApexChart
          options={chartData3.options}
          series={chartData3.series}
          type="line"
          height={250}    
        />
      </div>

      <div className={classes.gridContainer}>
        <div className={classes.col1}>
          <div className={classes.barGraph}>
            <div className={classes.graphAttributes}>
              <div className={classes.leftAtt}>
                <div className={classes.qty}>Qty/orders</div>
                <div className={classes.buy}>BUY</div>
              </div>
              <div className={classes.rightAtt}>
                <div className={classes.sell}>SELL</div>
                <div className={classes.qty}>Qty/orders</div>
              </div>
            </div>
            <div className={classes.graphPlot}>
              <ReactApexChart
                options={chartData2.options}
                series={chartData2.series}
                type="bar"
                height={208}
                width={425}
               
                style={{ top: "-31px", left: "-38x", position: "relative" ,right:"10px"}}
              />
            </div>
          </div>
          <div className={classes.qty}>
            <div className={classes.qty1}>
              123.32.423 <br />
              Total Qty
            </div>
            <div className={classes.qty2}>
              123.32.423 <br />
              Total Qty
            </div>
          </div>
          <div className={classes.priceIndicator}>
            <h5 className={classes.title}>Price Indicator</h5>
            <div className={classes.greyContainer}>
              <div className={classes.data1}>
                <div className={classes.subdata}>
                  <div className={classes.subdata1}>900.00</div>
                  <div className={classes.subdata2}>LRM</div>
                </div>
                <div className={classes.subdata}>
                  <div className={classes.subdata1}>953.67</div>
                  <div className={classes.subdata2}>LRM</div>
                </div>
                <div className={classes.subdata}>
                  <div className={classes.subdata1}>954.32</div>
                  <div className={classes.subdata2}>LRM</div>
                </div>
                <div className={classes.subdata}>
                  <div className={classes.subdata1}>987.67</div>
                  <div className={classes.subdata2}>LRM</div>
                </div>
              </div>
              <div className={classes.data2}>Lorem lorem lorem</div>
              <div className={classes.data3}>952.56</div>
            </div>
          </div>
        </div>
        <div className={classes.col2}>
          <div className={classes.volume}>
            <h5 className={classes.title}>Volume</h5>
            <div className={classes.greyContainer}>
              <div className={classes.leftwrap}>
                <div className={classes.data1}>28,89,897</div>
                <div className={classes.data2}>lorem lorem</div>
                <div className={classes.data2}>500</div>
                <div className={classes.data2}>lorem lorem</div>
                <div className={classes.data2}>lorem lorem</div>
              </div>
              <div className={classes.rightwrap}>
                <div className={classes.rightData}>935.4</div>
                <div className={classes.rightData}>987.34</div>
              </div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.text}>Looks like a good time to trade!</div>
            <a href="" className={classes.link}>
              Options
            </a>
            <button className={classes.button}>Trade</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
