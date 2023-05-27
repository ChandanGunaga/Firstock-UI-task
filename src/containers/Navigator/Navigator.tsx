import classes from "./Navigator.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import MonitorIcon from "@mui/icons-material/Monitor";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navigator = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navigation}>
        <HomeIcon fontSize="small" />
        <MonitorIcon fontSize="small" sx={{color:'#539cea'}}/>
        <ContentCopyIcon fontSize="small" />
      </div>
      <div className={classes.profile}>
        <AccountCircleIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Navigator;
