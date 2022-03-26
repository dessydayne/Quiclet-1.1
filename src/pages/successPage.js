import React from "react";
import styled from "styled-components";
import logo_image from "../assets/full_logo.svg";
import rocketImage from "../assets/rocket-dynamic-color.svg";

export const SuccessMessage = () => {
  return (
    <Container>
        <Wrapper>

        `<LogoBox>
            <Logo src={logo_image} />
        </LogoBox>
        <PsedoBox>
            <SuccesMessageBox>
            <MessageContainer>
                <MessageWrapper>
                <MessageHeader>Congratulations! You did well</MessageHeader>
                <MessageMainPhrase>
                    You will be the first to know when we are ready.{" "}
                    <RocketImage src={rocketImage} />{" "}
                </MessageMainPhrase>
                <MessageSubPhrase>We promise.</MessageSubPhrase>
                </MessageWrapper>
            </MessageContainer>
            </SuccesMessageBox>
        </PsedoBox>`
        </Wrapper>

      <MobileRocketImage src={rocketImage} />{" "}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fae8da;
  height: calc(100vh - 56px);
  padding: 28px 38px;

  @media screen and (max-width: 1377px) {
    height: calc(100vh - 25px);
  }
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 375px) {
    padding: 28px 20px;
  }
`;
const Wrapper = styled.div`
    @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
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

  @media screen and (max-width: 1000px) {
    max-width: 760px;
    height: 330px;
    margin: 54px auto;
  }
  @media screen and (max-width: 885px) {
    max-width: 670px;
  }
  @media screen and (max-width: 768px) {
    max-width: 70%;
    border: 2px dotted #010101;
    height: 406px;
  }
  @media screen and (max-width: 550px) {
    max-width: 80%;
  }
`;
const SuccesMessageBox = styled.div`
  border-radius: 5px;
  max-width: 845px;
  height: 382px;
  width: 100%;
  margin: auto;
  background: #fdfbf8;
  border: 2px solid #010101;
  position: absolute;
  top: 14%;
  right: -6%;

  @media screen and (max-width: 1000px) {
    max-width: 760px;
    height: 345px;
    right: -8%;
  }
  @media screen and (max-width: 885px) {
    max-width: 670px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 406px;
    right: -12%;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0 40px;
  }
`;
const MessageWrapper = styled.div``;

const MessageHeader = styled.h2`
  font-family: "Poppins";
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    line-height: 45px;
    margin: 15px auto;
  }
  @media screen and (max-width: 590px) {
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;
const MessageMainPhrase = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #874b18;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: inline;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const RocketImage = styled.img`
  margin-bottom: -12%;

  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

const MessageSubPhrase = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #111e0f;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: inline;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
    font-weight: 500;
  }
`;
const MobileRocketImage = styled.img`
    display: none;
    @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
    margin-top: 100px;
  }
`;
