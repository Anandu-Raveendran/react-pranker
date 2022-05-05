
import React from "react";
import './Home.css'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="maindiv">

            <h1>Welcome to Prank On</h1>

            <h6>Here we let you create pranks for your firends</h6>

            <h6>Select a prank, add your name and send the link to your firends</h6>
            <h6>And bham!!</h6>
            <Link to="/createPrank">
                <Button variant="contained" >Prank a firend</Button>
            </Link>
        </div>
    )
}
export default Home
