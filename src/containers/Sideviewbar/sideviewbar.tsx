import Sidebar from "../Sidebar/Sidebar";
import Navigator from "../Navigator/Navigator";
import classes from "./Sideviewbar.module.scss";

const sideviewbar = (props: any) => {
  const sendData = (ele: any) => {
    props.getData(ele)
  }
  return (
    <div className={classes.wrapper}>
      <Navigator />
      <Sidebar sendData={sendData} />
    </div>
  );
};

export default sideviewbar;
