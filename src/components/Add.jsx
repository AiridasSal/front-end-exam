import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from "../api";

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Authorization': `bearer ${getToken()}`
            }
        };
        axios
            .post('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
                title,
                description,

            }, config)
            .then((response) => {
                setNotification('Sėkmingai pridėta!');
                setTitle('');
                setDescription('');
            })
            .catch((error) => {
                setNotification(`Klaida: ${error.message}`);
            });
    };

    return (
        <div>

            {notification && <p
            className='notification'
            
            >{notification}</p>}
            <form 
            className='add-form'
            onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Add;
