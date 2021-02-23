import React from 'react';
import styled from 'styled-components'
import { setColor, setRadius } from '../../styles/'

const Person = ({ img, name, position, text }) => {
    return (
        <Wrapper>
            <img alt={name} src={ img } className="image" />
            <h4 className="name">{ name }</h4> 
            <p className="small">{ position }</p>
            <p>{ text }</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${ setColor.colorSigma };
    text-align: center;

    .name {
        font-weight: 500;
        font-size: 1.8rem;
        margin: 1.5rem 0;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .image {
        border-radius: ${ setRadius.radiusBeta };
        width: 100%;
    }
`

export default Person;