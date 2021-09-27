import React from 'react';
import PicData from './PicData';
import PicCard from './PicCard';
import { propTypes } from 'react-bootstrap-v5/lib/esm/Image';
import './Pic.css'


const showID = () => {
    return (`ID Of this image is ${this.id}`)
};

const PicID = () => {
    
    return (
        <>
            <div className="headingStyle">Click On Image to see its ID</div>
            {/* {PicData.map((val) => {
                return(
                    <PicCard
                        Img={val.Img_Src}
                        ID= {val.id}
                    />
                );
            })}; */}

            {/* ------------- */}
            <div>
                <a href=""><img src='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80' id='1' alt="Card Image"  onClick={showID()}>

                </img></a>
            </div>
            <div>
                <a href=""><img src="https://images.unsplash.com/photo-1632720369255-2a1d4a63383d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" id='2' alt="Card Image"  onClick={showID()}/>
                </a>
            </div>
            <div>
                <a href=""><img src="https://images.unsplash.com/photo-1628191078380-40ee187b92fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" id='3' onClick={showID()}/>
                </a>
            </div>
        </>
    )
}

export default PicID;