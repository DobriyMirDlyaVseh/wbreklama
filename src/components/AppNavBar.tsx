import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 0,
  },
}));

interface AppNavBarProps {
  handleDrawerToggle: () => void;
  styles: TODO;
}
// class Header extends React.Component {
const AppNavBar: React.FC<AppNavBarProps> = ({ styles, handleDrawerToggle}) => {
const handleClick = () => {
    window.open(
      "https://github.com/harryho/react-crm",
      undefined,
      undefined,
      false
    );
  };

  let style = useStyles(styles);



  return (
    <div>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
               onClick={handleDrawerToggle}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={style.title}>
            Реклама
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;
