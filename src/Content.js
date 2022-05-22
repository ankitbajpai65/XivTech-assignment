import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'aos/dist/aos.css';

const Content = (props) => {
    return (
        <div className="container d-flex justify-content-evenly mt-5 mb-5">
            <div className="infoDiv">
                <h1 className="head">{props.head}</h1>
                <div className="imgDivMob">
                    <img src={props.img} alt="" className="image" />
                </div>
                <h3 className="description">{props.des}</h3>
                <p className="link d-inline-block">{props.info}</p>
                <img src={require('./images/right-arrow.png')} alt="" className="icon mb-2" />
            </div>
            <div className="imgDiv">
                <img src={props.img} alt="" className="image" />
            </div>
        </div>
    )
}

export default Content; 