import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./showPrank.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useSearchParams } from "react-router-dom";

function ShowPrank() {
    const [searchParams] = useSearchParams();
    let friend = searchParams.get("friend")
    let type = searchParams.get("pr")
    let [title, setTitle] = useState("Congratulations");
    let [msg, setMsg] = useState("You have a message from");
    const [prankType, setPrankType] = useState("");

    var audioSrc = "";

    console.log("Friend " + friend + " Type " + type)


    if ("sn".localeCompare(type) === 0) { //sex noise
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/sexaudio.mp3";
    } else if ("cv".localeCompare(type) === 0) { //scary vidio
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/screaming.mp3";
    } else if ("rn".localeCompare(type) === 0) { //screeming noise
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/screaming.mp3";
    } else if ("mf".localeCompare(type) === 0) { //middle finger
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/dramatic_music.mp3";
    } else { //sn case
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/sexaudio.mp3";
    }

    let audio = new Audio(audioSrc)
    const start = () => {
        setPrankType(type);
        setTitle("You got pranked !!")
        setMsg("by");
        if (audioSrc.length > 0) {
            audio.play()
        }
    }

    return (
        <div className="main">
            {message()}
            <Button onClick={start}>Show message</Button>
            <div className="prankDiv">
                {(prankType === "sn") ? prankSn() : ""}
                {(prankType === "cv") ? prankCv() : ""}
                {(prankType === "rn") ? prankRn() : ""}
                {(prankType === "mf") ? prankMf() : ""}
            </div>

        </div>
    )


    function message() {
        return (<div className="message">
            <h1>{title}</h1>
            <h4>{msg} </h4>
            <h3><b>{friend}</b></h3>
        </div>)
    }

    function createBtn() {
        return (<Link to="/react-pranker/createPrank">
            <Button variant="contained" className="prankBtn">Prank a friend </Button>
        </Link>
        );
    }

    function prankSn() {
        return (
            <div>
                <Card>
                    < CardMedia
                        component="img"
                        image="https://i.gifer.com/1ebr.gif"
                        alt=""
                    />
                </Card>
                {createBtn()}
            </div >
        )
    }
    function prankRn() {
        return (
            <div>
                <Card>
                    < CardMedia
                        component="img"
                        image="https://media2.giphy.com/media/5zvPqo6ZSnjoXg2BaB/200.gif"
                        alt=""
                    />
                </Card>
                {createBtn()}
            </div >
        )
    }
    function prankMf() {
        return (
            <div>
                <Card>
                    < CardMedia
                        component="img"
                        image="https://c.tenor.com/VuMyybWzGzMAAAAC/wind-up-middle-finger.gif"
                        alt=""
                    />
                </Card>
                {createBtn()}
            </div >
        )
    }
    function prankCv() {
        return (
            <div>
                <Card>
                    < CardMedia
                        component="img"
                        image="https://c.tenor.com/FlrQo24znqEAAAAC/no-sleep-scary.gif"
                        alt=""
                    />
                </Card>
                {createBtn()}
            </div >
        )
    }

}

export default ShowPrank