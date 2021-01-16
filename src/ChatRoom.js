import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const ChatRoom = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://127.0.0.1:5000';

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);
        
        console.log(socket);
        
        
    }, [ENDPOINT, location.search]);
    return(
        <h1>Chat</h1>
    );

};
export default ChatRoom;