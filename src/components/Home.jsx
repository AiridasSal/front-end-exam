import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from "../api";

const Home = () => {
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `bearer ${getToken()}`
            }
        };
        axios
            .get('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', config)
            .then((response) => {
                setSkills(response.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {!error && !skills.length && <p>Nėra įrašų</p>}
            <div>
                {skills.map((skill) => (
                    <div
                    className='home-card'
                    key={skill.id}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;