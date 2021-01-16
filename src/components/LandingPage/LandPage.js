import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './LandPage.css';

const LandPage = () => {
    const [name,setName] = useState('');
    const [roomName,setRoom] = useState('');
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)} /></div>
                <div><input placeholder="" className="joinInput" type="text" onChange={(event)=>setRoom(event.target.value)} /></div>
                <Link onClick={event=>(!name || !roomName) ? event.preventDefault(): null}to={`/chat?name=${name}&room=${roomName}`}>
                <button className="button mt-20" type="submit">Enter</button>
                </Link>
            </div>
        </div>
    );

};
export default LandPage;