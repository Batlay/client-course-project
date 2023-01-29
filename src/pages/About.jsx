import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';

const About = () => {
    const {value, setValue} = useContext(UserContext)
    console.log(value)

    return (
        <h1>
           Алоха
        </h1>
    );
};

export default About;