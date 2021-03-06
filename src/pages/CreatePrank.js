import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ContentCopy from '@mui/icons-material/ContentCopy'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DoneIcon from '@mui/icons-material/Done';
import "./CreatePrank.css"


function CreatePrank() {

    const [name, setName] = useState("");
    const [prank, setPrank] = useState("sn")
    const [dialogOpen, setDialogOpen] = useState(false)
    const [showSupport, setShowSupport] = useState(false)

    function prankClicked() {
        setDialogOpen(true)
    }

    function handleClose() {
        setDialogOpen(false)
    }

    function copyToClipBoard() {
        var str = window.origin + "/react-pranker?pr=" + prank + "&friend=" + name;
        navigator.clipboard.writeText(str)
        setShowSupport(true)
    }

    function share() {
        copyToClipBoard()
    }

    function simpleDialog() {
        return (
            <Dialog onClose={handleClose} open={dialogOpen}>
                <DialogTitle>Your prank url is ready</DialogTitle>
                <Divider />
                <Container>
                    <h6>Your prank Url is:</h6>
                    <p>'{window.origin}/react-pranker?pr={prank}&friend={name}'</p>
                    <Divider />
                    <Grid container spacing={0}>
                        <Grid item xs={7}>
                            <Button startIcon={<ContentCopy />}
                                onClick={copyToClipBoard}
                            >Copy link</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button endIcon={<SendIcon />} onClick={share}>Share</Button>
                        </Grid>
                        {support()}
                    </Grid>
                    <Divider />
                </Container >
            </Dialog >);
    }

    function support() {
        if (showSupport) {
            return (
                < Grid item >
                    <Divider />
                    <Button startIcon={<DoneIcon />} style={{ color: 'gray', textAlign: 'center', }}>Link is copied to clipboard</Button>

                    <h3>Support me</h3>

                    <a href="https://www.buymeacoffee.com/47anandu009">
                        <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="47anandu009" />
                    </a>

                    <a href="https://github.com/Anandu-Raveendran/react-pranker">
                        <Button startIcon={<StarBorderIcon />} onClick={share}>Star this page on GitHub</Button>
                    </a>
                    <br />
                    <br />
                    <Divider />

                </Grid >
            )
        } else {
            return null
        }
    }

    return (

        <div className="mainDiv">

            <h1>Create a prank</h1>

            <h6>First give us your name to show it to your friend after the prank</h6>
            <TextField id="filled-basic" label="Enter your name" variant="filled"
                value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />

            <br />
            <br />

            <h6>Now Select a prank from below</h6>
            <br />
            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <Card className="item" >
                        <CardActionArea
                            onClick={() => {
                                setPrank("sn")
                                prankClicked()
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.gifer.com/1ebr.gif"
                                alt="Sex noice bomb"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sex noise bomb
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Play sex noise when link is opened
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className="item">
                        <CardActionArea
                            onClick={() => {
                                setPrank("rn")
                                prankClicked()
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://media2.giphy.com/media/5zvPqo6ZSnjoXg2BaB/200.gif"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Screaming noise
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Play screaming noise on opeing link
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className="item">
                        <CardActionArea
                            onClick={() => {
                                setPrank("mf")
                                prankClicked()
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://c.tenor.com/VuMyybWzGzMAAAAC/wind-up-middle-finger.gif"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Middle finger
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Show middle finger on oping the link
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className="item">
                        <CardActionArea
                            onClick={() => {
                                setPrank("cv")
                                prankClicked()
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://c.tenor.com/FlrQo24znqEAAAAC/no-sleep-scary.gif"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Scary video prank
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Play scary video on clicking the link
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <br />
            <br />
            {simpleDialog()}

        </div>
    )
}
export default CreatePrank