import React from 'react';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Sea from './sea.jsx';



function Background() {
    return (
       <div>
       <Sea />
       </div>
    );
}

export default Background;