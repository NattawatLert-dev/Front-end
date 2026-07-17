import profilePic from './assets/Images.jpg'

function Card(){

    return(
        <div className="card">
            <img className='Images' src={profilePic} alt="profile picture" ></img>
            <h2 className='card-title'>Nattawat</h2>
            <p className='card-text'>I learning react Tutorial</p>
        </div>
    );
}

export default Card