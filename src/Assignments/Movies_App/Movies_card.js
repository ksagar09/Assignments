// import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Movie_app.css';


export const Movies_card = (props) => {

    return (


        <div>
            
            <div className="card" style={{ width: "18rem", margin: "3rem" }}>
                <img className="card-img-top" src={props.Img} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-subtitle">{props.card_subtitle}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.card_title}</h5>
                    <p className="card-text">{props.card_text}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">IMDB Ratings {props.IMDB_Ratings}</li>

                </ul>
                <div className="card-body">
                    <button className="button"> Watch Now {props.netflix_link}</button>
                    {/* <a href="#" className="card-link"></a> */}

                </div>
            </div>
        </div>
        

    )
}
export default Movies_card;
