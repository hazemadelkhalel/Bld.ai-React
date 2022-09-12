import React from 'react';

const Starsgenerator = (props) => {
    let stars = '';
    let full = `<span class='fa fa-star' style = 'color:#E59819'></span>`;
    let half = `<span class='fa fa-star-half-o' style = 'color:#E59819'></span>`;
    let empty = `<span class='fa fa-star-o' style = 'color:#E59819'></span>`;
    var cnt = Math.floor(props.stars);
    for(var i = 0;i<cnt;++i){
        stars+=full;
    }
    if(props.stars != cnt){
        stars+=half;
        cnt++;
    }
    for(var i = cnt;i<5;++i){
        stars+=empty;
    }
    return (
        <span style={{marginRight: "5px"}}>
            <span style={{marginRight: "5px"}}>{props.stars}</span>
            <span dangerouslySetInnerHTML={{ __html: stars }}></span>
        </span>
    );
}

export default Starsgenerator;
