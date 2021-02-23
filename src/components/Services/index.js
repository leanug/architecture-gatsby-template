import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import Title from "../Title"
import { setColor, setBreakpoint, setRadius } from '../../styles/'

const Wrapper = styled.section`

    .container {
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    }

    .services-row {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
        grid-gap: 3rem;
    }
`

const Services = () => {
    return (
        <Wrapper>
            <div className="container">
                <Title 
                    title="services" 
                    text="Cloud bread live-edge direct trade deep"
                    left
                />
                <div className="services-row">
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </Wrapper>
    );
};

export default Services;