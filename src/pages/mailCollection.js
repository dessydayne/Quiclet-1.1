import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mailImage from "../assets/add_email.svg";
import logo_image from "../assets/full_logo.svg";

export const MailCollection = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/successMessage")
  }
  return (
    <Container>
      <Wrapper>

      <LogoBox>
        <Logo src={logo_image} />
      </LogoBox>
      <PsedoBox>
        <FormBox>
          <FormWrapper>
            <ImageSection>
              <ImageItem src={mailImage} />
            </ImageSection>
            <FormSection>
              <FormHeader>Be the first to know!</FormHeader>
              <FormPhrase>
                we’ll let you know as soon as we are ready to serve you. We
                promise.
              </FormPhrase>
              <InputField placeholder="whats your mail?" />
              <FormButton onClick={handleClick}>Submit</FormButton>
            </FormSection>
          </FormWrapper>
        </FormBox>
      </PsedoBox>
      </Wrapper>
      <MobileView>
        <FormHeader>Be the first to know!</FormHeader>
        <MobilePsedoBox>
          <MobileImageBox>
            <ImageItem src={mailImage} />
          </MobileImageBox>
        </MobilePsedoBox>
        <InputField placeholder="whats your mail?" />
        <FormButton onClick={handleClick}>Submit</FormButton>
      </MobileView>
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
  }
  @media screen and (max-width: 885px) {
    max-width: 670px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const FormBox = styled.div`
  border-radius: 5px;
  max-width: 845px;
  height: 382px;
  margin: auto;
  background: #fdfbf8;
  border: 2px solid #010101;
  position: absolute;
  top: 14%;
  right: -6%;

  @media screen and (max-width: 1000px) {
    max-width: 760px;
    height: 345px;
    right: -8;
  }
  @media screen and (max-width: 885px) {
    max-width: 670px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  column-gap: 30px;

  @media screen and (max-width: 1000px) {
    padding: 10px 30px;
  }
`;
const ImageSection = styled.div``;
const ImageItem = styled.img`
  width: 100%;
`;
const FormSection = styled.div``;
const FormHeader = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: #111e0f;

  @media screen and (max-width: 1000px) {
    margin: 15px 0;
  }
  @media screen and (max-width: 1000px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 126%;
  }
`;
const FormPhrase = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #111e0f;
`;
const InputField = styled.input`
  background: rgba(196, 196, 196, 0.5);
  border: 3px solid #ebe5e5;
  border-radius: 5px;
  padding: 12px 20px;
  width: calc(100% - 48px);
  margin: 8px 0;
  outline: none;

  @media screen and (max-width: 768px) {
    background: #efeded;
    border-radius: 5px;
    margin-top: 70px;
  }
`;
const FormButton = styled.button`
  width: 100%;
  padding: 10px 10px;
  background: #111e0f;
  border-radius: 5px;
  color: #fdfbf8;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
`;

const MobileView = styled.div`
display: none;

@media screen and (max-width: 768px) {
  max-width: 310px;
  margin: auto;
  margin: 30px auto;
  }
  @media screen and (max-width: 425px) {
    max-width: 100%;
    margin: 20px auto;
  }
`;
const MobilePsedoBox = styled.div`
  position: relative;
  border: 3px solid #010101;
  border-radius: 5px;
  max-width: 246px;
  height: 356.04px;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 425px) {
    max-width: 80%;
  }
`;
const MobileImageBox = styled.div`
  border-radius: 5px;
  max-width: 246px;
  height: 356px;
  margin: auto;
  background: #fdfbf8;
  border: 2px solid #010101;
  position: absolute;
  top: 14%;
  right: -28%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    top: 13%;
    right: -20%;
    max-width: 100%;
  }
`;
