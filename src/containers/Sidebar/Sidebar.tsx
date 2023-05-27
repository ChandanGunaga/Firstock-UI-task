import { Tab } from '@mui/material';
import classes from './Sidebar.module.scss';
import ScrollableTabsButtonPrevent from '../../components/Tabs';
import data from '../../assets/data/data.json';

const Sidebar = (props: any) => {
  const tabList = data.watchlists;

  const handleClick = (ele: any) => {
    props.sendData(ele)
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.wishlistContainer}>
        <ScrollableTabsButtonPrevent>
          {tabList.map((ele, i) => (
            <Tab
              label={`Watchlist${i + 1}`}
              className={classes.wishlist}
              sx={{
                '& .Mui-selected': {
                  bgcolor: '#f3f3f3',
                },
              }}
              onClick={() => handleClick(ele)}
            />
          ))}
        </ScrollableTabsButtonPrevent>
      </div>
      <div className={classes.basket}>Basket</div>
    </div>
  );
};

export default Sidebar;
