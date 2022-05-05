import React from "react";
import { Link } from "react-router-dom";


function ErrorPage() {
    return (
        <div>
            <h1>Oops this is not a valid url.</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="createPrank"> Create a new prank</Link>
        </div >
    )
}
export default ErrorPage