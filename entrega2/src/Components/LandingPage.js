import React from 'react';
import { Button, Footer, Navbar } from "react-materialize";
import Logocow from "../Images/Logocow.png";
import IndexIcon from "../Images/IndexIcon.jpg";

const LandingPage = () => (
    <div>
        <Navbar className="verde" brand={<img src={Logocow} />} centerLogo={true} alignLinks="left" />
        <div className="alinear" style={{ backgroundImage: `url(${IndexIcon})`, width: "100%", height: "600px" }}>
            <h1 styte={{ fontfamily: "" }}><b>Bienvenido a Dr.Cow</b><br />
                <Button
                    className="verde alinear"
                    onClick={() => { location.assign("/Bovino") }}
                    node="a"
                    waves="light"
                    large={true}
                    style={{ marginRight: '5px' }}
                >
                    Entrar
                </Button>
            </h1>
        </div>
        <Footer className="verde" copyrights="Dr.cow 2019 Copyright - todos los derechos reservados">
            <h5 className="white-text">
                Dr.Cow
            </h5>
            <p className="grey-text text-lighten-4">
                Trabajo Clase CES2
            </p>
        </Footer>
    </div>
)

export default LandingPage;