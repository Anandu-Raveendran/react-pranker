
import React from "react";
import './Home.css'
import Button from '@mui/material/Button';
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ShowPrank from "./showPrank";

function Home() {
    const [searchParams] = useSearchParams();
    let friend = searchParams.get("friend")
    let type = searchParams.get("pr")
    const navigate = useNavigate();

    console.log("Type is " + type)
    if (type) {
        return <ShowPrank />
    }

    return (
        <div className="maindiv">

            <h1>Welcome to Prank On</h1>

            <h6>Here we let you create pranks for your firends</h6>

            <h6>Select a prank, add your name and send the link to your firends</h6>
            <h6>And bham!!</h6>
            <Link to="/react-pranker/createPrank">
                <Button variant="contained" >Prank a firend</Button>
            </Link>
        </div>
    )
}
export default Home
