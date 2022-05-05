import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CreatePrank.css";
import { Howl } from "howler"
import Button from '@mui/material/Button';

function ShowPrank() {
    let { friend } = useParams();
    let { type } = useParams();

    const [prankType, setPrank] = useState("")

    var audioSrc = "";


    if ("sn".localeCompare(type) == 0) {
        audioSrc = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";
    } else if ("cv".localeCompare(type) == 0) {
        audioSrc = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";
    } else if ("rn".localeCompare(type) == 0) {
        audioSrc = "https://github.com/Anandu-Raveendran/react-pranker/raw/main/src/screaming.mp3";
    } else if ("mf".localeCompare(type) == 0) {
        audioSrc = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";
    } else { //sn case
        audioSrc = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";
    }

    let audio = new Audio(audioSrc)
    const start = () => {
        audio.play()
        setPrank(type);
    }

    return (
        <div className="main">
            {message()}
            <Button onClick={start}>Show message</Button>
            {(prankType == "sn") ? prankSn() : ""}
            {(prankType == "cv") ? prankCv() : ""}
            {(prankType == "rn") ? prankRn() : ""}
            {(prankType == "mf") ? prankMf() : ""}

        </div>
    )


    function message() {
        return (<div className="message">
            <h1>Congratulations</h1>
            <h6>You have a message from </h6>
            <h6><b>{friend}</b></h6>
        </div>)
    }

    function prankSn() {
        return (
            <div>Sn</div>
        )
    }
    function prankRn() {
        return (
            <div>Rn</div>
        )
    }
    function prankMf() {
        return (
            <div>Mf</div>
        )
    }
    function prankCv() {
        return (
            <div>Cv</div>
        )
    }

}

export default ShowPrank