import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <div className="text-center">
                <div className="note-img">
                    <h1 className="display-4">Empowering  Students</h1>
                    <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "deepskyblue" }}>Awesome</span> </h2>
                        <p>myNotebook is made from the pain of writing all the things in notebook which is very hectic :(, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee.
                            you can also access your notes anywhere in your world, at anytime time . So dont forget to Create note because creating anything is always important
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "deepskyblue" }}>internet’s visuals</span> </h2>
                        <p>
                            How we started? The concept was simple. myNotebook was born from the pain of writing all the things in notebook which is very hectic :( .
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                        </p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2022 <Link to="/">myNotebook </Link><br/>All rights reserved</span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
