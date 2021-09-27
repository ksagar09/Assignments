import React from 'react';

import movies from './Movies_Data';
import Movies_card from './Movies_card';

const Movielist = () => {
return(
    <>
    <div className="headingStyle">Movies Card</div>
    { movies.map((val) => {
    return (
        <Movies_card
            Img={val.Img}
            card_title={val.card_title}
            card_subtitle={val.card_subtitle}
            netflix_link={val.netflix_link}
            card_text={val.card_text}
            IMDB_Ratings={val.IMDB_Ratings}
        />
    );
})};
</>
)
}


export default Movielist;