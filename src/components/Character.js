// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";



const StyledBox = styled.div`
display:flex;
justify-content: space-between;
margin-left: 10%;
margin-right: 10%;
background-color:white;
opacity: 75%;
border: 1px solid black;

padding: 10px;
padding-top: 10px;
`


const StyledName = styled.div`
padding-left: 5%;


`
const StyledYear = styled.div`
padding-right: 5%;

`












const Character = (props) => {
  const { characters } = props;

  return (
    <div>
      {characters.map((res) => {
        return (
          <StyledBox>
            <StyledName>
                {res.name}
            </StyledName>
            <StyledYear>
                 {res.birth_year}
            </StyledYear>
            
            </StyledBox>
        );
      })}
    </div>
  );
};

export default Character;
