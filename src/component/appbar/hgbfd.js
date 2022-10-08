import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import logo from './logo.svg';
import './App.css';
import Login from './component/login/login.js'
import ButtonAppBar from './component/appbar/ButtonAppBar.js'
import Order from './component/orders/Order';
import Customers from './component/Customer/Customers'
import Suplise from './component/suplise/suplise'
import React from "react";
import Forwarders from "./component/Forwarder/Forwarders"
import Parts from "./component/part/Parts"
import Documents from "./component/document/Documents"
import Commissions from "./component/Commission/Commmissions"
import NewOrder from "./component/addOrder/neworder"
import AddCus from "./component/AddCu/AddCus"
import AddBreak from "./component/BreakPoint/addBreak"
import BreackPoint from "./component/BreakPoint/BreakPoints"
import AddForwarder from "./component/Forwarder/AddForwarder"
import AddPart from "./component/part/AddPart"
import AddSuplise from "./component/suplise/AddSuplise"


import { Route,Routes, BrowserRouter } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: 30

  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
      const classes = useStyles();
      let navigate = useNavigate();
  
  const itemsList = [
    {
      text: 'Lawn & Garden ',
      icon: <InboxIcon />,
      onClick: () => navigate('/Order'),
    },
    {
      text: 'Lastec Order ',
      icon: <MailIcon />,
      onClick: () => navigate('/lastec'),
    },
    {
      text: 'Login',
      icon: <MailIcon />,
      onClick: () => navigate('/Login'),
    },{
      text: 'Customers ',
      icon: <MailIcon />,
      onClick: () => navigate('/Customers'),
    },
    {
      text: 'Suplise',
      icon: <MailIcon />,
      onClick: () => navigate('/Suplise'),
    },
    {
      text: 'Forwarders',
      icon: <MailIcon />,
      onClick: () => navigate('/Forwarders'),
    },{
      text: 'Parts ',
      icon: <MailIcon />,
      onClick: () => navigate('/Parts'),
    },
    {
      text: 'documents',
      icon: <MailIcon />,
      onClick: () => navigate('/Documents'),
    },
    {
      text: 'Commissions ',
      icon: <MailIcon />,
      onClick: () => navigate('/Commissions'),
    },
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        
        <List>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <BrowserRouter>
      
      <div >
        <Routes>
          
        <Route path="/Order" element={<Order />} />
          <Route path="/lastec" element={<Order />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Suplise" element={<Suplise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forwarders" element={<Forwarders />} />
          <Route path="/Parts" element={<Parts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/Commissions" element={<Commissions />} />
          <Route path="/Customers/AddCus" element={<AddCus />} /><Route path="/AddCus" element={<AddCus />} />
          <Route path="/Order/NewOrder" element={<NewOrder />} /> 
          <Route path="/Customers/NewOrder" element={<NewOrder />} />
          <Route path="/AddBreak" element={<AddBreak />} />
          <Route path="/BreackPoint" element={<BreackPoint />} />
          <Route path="/AddForwarder" element={<AddForwarder />} />
          <Route path="/AddPart" element={<AddPart />} />
          <Route path="/AddSuplise" element={<AddSuplise />} />
        </Routes>
      </div>
    </BrowserRouter>
      </main>
    </div>
  );
}
