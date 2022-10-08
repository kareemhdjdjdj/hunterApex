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

import { makeStyles } from "@material-ui/core/styles";
import { margin, positions, width } from '@mui/system';


const useStyles = makeStyles({
  container: {    display:"inline-flex",
  position:"absolute",
  marginLeft:-200,
  marginTop:"7rem",

  
  },
  sad:{
    width:800  }
 
});

export default function App() {
  const classes = useStyles();
  return (
    
             
    <div className={classes.container}>
       <BrowserRouter>
      <ButtonAppBar />
      <div className={classes.sad} >
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
          <Route path="/Order/NewOrder" element={<NewOrder />} />  <Route path="/Lastec/NewOrder" element={<NewOrder />} /> 
          <Route path="/Customers/NewOrder" element={<NewOrder />} />
          <Route path="/AddBreak" element={<AddBreak />} />
          <Route path="/BreackPoint" element={<BreackPoint />} />
          <Route path="/AddForwarder" element={<AddForwarder />} />
          <Route path="/AddPart" element={<AddPart />} />
          <Route path="/AddSuplise" element={<AddSuplise />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
    
  );
}
