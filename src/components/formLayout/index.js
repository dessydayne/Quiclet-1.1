import React from 'react';
import styled from 'styled-components';
import logo_image from "../../assets/full_logo.svg";

export const FormLayout = ({children}) => {
  return (
      <Container>
            <LogoBox>
                <Logo src={logo_image } />
            </LogoBox>
                <PsedoBox>
                <FormBox>
                    {children}
                </FormBox>

                </PsedoBox> 
      </Container>
  )
}

export const WithFormLayout = (Component) => {
    return(props) => {
        return(
            <FormLayout>
                <Component {...props} />
            </FormLayout>
        )
    }
}

const Container = styled.div`
    background-color: #FAE8DA;
    height: calc(100vh - 56px) ;
    padding: 28px 38px;
    `;
const LogoBox = styled.div``;
const Logo = styled.img``;
const PsedoBox = styled.div`
    position: relative;
    border: 3px solid #010101;
    border-radius: 5px;
    max-width: 845px;
    height: 382px;
    width: 100%;
    margin: 45px auto;
`;
const FormBox = styled.div`
    border-radius: 5px;
    max-width: 845px;
    height: 382px;
    margin: auto;
    background: #FDFBF8;
    border: 2px solid #010101;
    position: absolute;
    top: 14%;
    right: -6%;
`;

