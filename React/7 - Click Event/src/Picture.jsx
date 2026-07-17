
function Picture(){

    const imagesUrl = './src/assets/Images.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <>
        <img onClick={(e) => handleClick(e)} src={imagesUrl} className="pic"></img>
        </> 
    );

}

export default Picture