function CricNew({imgLink,title,headline,c,d}) {
    return(
        <div>
            
            <img src= {imgLink}></img>
            
            <small>{title}</small>
            <h4>{headline}</h4>
            <small>{d}</small>
            <br></br>
            <a href={c} >Read More</a>

        </div>
    );
}


export default CricNew;