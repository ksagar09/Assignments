import React from 'react';
import PicData from './PicData';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const PicCard = (props) => {
    return (
        <>

            <div>

                <div className="card" style={{ width: "18rem", margin: "3rem" }}>
                    <img className="card-img-top" src={props.Img_Src} alt="Card Image" />
                </div>
                <div className="card" style={{ width: "18rem", margin: "3rem" }}>
                    <img className="card-img-top" src={props.Img_Src} alt="Card Image" />
                    <p> {props.id}</p>
                </div>
                <div className="card" style={{ width: "18rem", margin: "3rem" }}>
                    <img className="card-img-top" src={props.Img_Src} alt="Card Image" />
                </div>
            </div>


        </>
    )
}

export default PicCard;