import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import { Box, AppBar, IconButton, Button, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

 const NavBar = () => {

    const useStyles = makeStyles(() => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: 20,
      },
      title: {
        flexGrow: 1,
        textDecoration: "none"
      },
    }));
  
    const classes = useStyles();
  
    const { root, menuButton, title } = classes;
  
    return (
      <Box className={root}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/">
              <a className={title}>
                <Typography variant="h6" color="secondary">
                  Home
                </Typography>
              </a>
            </Link>
            <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }

  export default NavBar