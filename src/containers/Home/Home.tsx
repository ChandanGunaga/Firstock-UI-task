import Details from "../Details/Details";
import Header from "../Header/Header";
import Stocklist from "../Stocklist/Stocklist";
import classes from "./Home.module.scss";


const Home = (props:any) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.stockInfo}>
        <div className={classes.stocklist}>
          <Stocklist tabData={props.tabData} />
        </div>
        <div className={classes.details}>
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Home;
