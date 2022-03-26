import React from "react";
import styled from "styled-components";
import mobilePayment from "../assets/mobile_payment_image.svg";
import rocketDynamicColor from "../assets/rocket-dynamic-color.svg";
import sparkImage from "../assets/spark.svg";
import arrow_right from "../assets/arrow-right.svg";
import mobile_image_item from "../assets/mobile_image.svg";
import mobileSparkImage from "../assets/mobile_spark.svg";
import { useNavigate } from "react-router-dom";
import { Navbar, MobileNavigation } from "../components/navbar";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mail_collection");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Navbar />
          <BodyWrapper>
            <TextWrapper>
              <CaptionPhrase>
                Rent your House online. For real.
              </CaptionPhrase>
              <HeaderBox>
                <HeaderText>
                  The easiest way to rent your apartment{" "}
                  <RocketImg src={rocketDynamicColor} />{" "}
                </HeaderText>

                <SparkImg src={sparkImage} />
              </HeaderBox>
              <ListTitle>With our platform you can</ListTitle>
              <UseCaseList>
                <UseCaseListItems>
                  inspect more houses in less time,
                </UseCaseListItems>
                <UseCaseListItems>
                  enjoy flexible payments options and
                </UseCaseListItems>
                <UseCaseListItems>move in when you want to.</UseCaseListItems>
              </UseCaseList>
              <ActionBtn onClick={() => handleClick()}>
                <ButtonText>GET EARLY ACCESS</ButtonText>
                <ButtonIcon src={arrow_right} />
              </ActionBtn>
            </TextWrapper>
            <ImageWrapper>
              <ImageSection>
                <ImageItem src={mobilePayment} />
              </ImageSection>
            </ImageWrapper>
          </BodyWrapper>
        </Wrapper>
      </Container>
      <MobileContainer>
        <MobileNavigation />

        <MoblileBodyWrapper>
          <MobileCatchPhrase>
            Rent your House online. For real.
          </MobileCatchPhrase>
          <MobileHeaderBox>
            <MobileHeaderText>Choose. Pay. Move</MobileHeaderText>
          </MobileHeaderBox>
          <MobileUseCaseList>
            With our platform you can inspect more houses in less time, enjoy
            flexible payments options and move in when you want to.
          </MobileUseCaseList>
          <MobileImageBox src={mobile_image_item} />
          <MobileTextBox>
            <MobileSpark src={mobileSparkImage} />
            <MobileText>The easiest way to rent your apartment</MobileText>
          </MobileTextBox>
          <MobileButtonWrapper>
            <MobileButton onClick={() => handleClick()}>
              Get early access
            </MobileButton>
          </MobileButtonWrapper>
        </MoblileBodyWrapper>
      </MobileContainer>
    </>
  );
};

export default LandingPage;

// web view style
const Container = styled.main`
  height: 100vh;
  background-color: #faede2;

  
  @media screen and (max-width: 787px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 10px 70px;
  padding-top: 25px;
  background-color: #faede2;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
  @media screen and (max-width: 822px) {
    padding: 10px 52px;
  }
`;

const BodyWrapper = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  margin-top: 25px;
`;
const TextWrapper = styled.div`
  width: 55%;

  @media screen and (max-width: 999px) {
    font-size: 19px;
  }
`;
const CaptionPhrase = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.045em;
  color: #111e0f;

  @media screen and (max-width: 1010px) {
    font-size: 19px;
  }
  @media screen and (max-width: 822px) {
    font-size: 18px;
  }
`;
const HeaderBox = styled.div`
  position: relative;
  height: fit-content;
`;

const RocketImg = styled.img`
  margin-bottom: -46px;
  @media screen and (max-width: 921px) {
    margin-bottom: -60px;
  }
`;
const SparkImg = styled.img`
  position: absolute;
  top: -28%;
  left: -7%;

  @media screen and (max-width: 1218px) {
    top: -38%;
    left: -8%;
  }
  @media screen and (max-width: 1077px) {
    top: -60%;
  }
  @media screen and (max-width: 921px) {
    top: -60%;
    left: -9%;
  }
  @media screen and (max-width: 853px) {
    top: -67%;
    left: -10%;
  }
`;

const HeaderText = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 60px;
  text-transform: uppercase;
  color: #111e0f;
  margin: 10px 0;

  @media screen and (max-width: 1360px) {
    font-size: 41px;
    line-height: 50px;
  }
  @media screen and (max-width: 1218px) {
    font-size: 39px;
    line-height: 40px;
  }
  @media screen and (max-width: 1155px) {
    font-size: 36px;
    line-height: 35px;
  }
  @media screen and (max-width: 1077px) {
    font-size: 33px;
    line-height: 20px;
  }
  @media screen and (max-width: 921px) {
    font-size: 30px;
    line-height: 25px;
  }
  @media screen and (max-width: 855px) {
    font-size: 28px;
    line-height: 20px;
  }
`;
const ListTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.045em;
  color: #111e0f;

  @media screen and (max-width: 1010px) {
    font-size: 19px;
  }
`;
const UseCaseList = styled.ul`
  padding-left: 18px;
`;
const UseCaseListItems = styled.li`
  list-style-type: none;
  list-style-type: "★";
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.045em;
  padding-left: 12px;
  color: #111e0f;
  @media screen and (max-width: 1010px) {
    font-size: 19px;
  }
`;
const ActionBtn = styled.button`
  background-color: rgba(17, 30, 15, 1);
  border: none;
  color: #faede2;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  font-family: "Abel";
  width: 60%;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  @media screen and (max-width: 1010px) {
    font-size: 19px;
  }
`;

const ButtonText = styled.p`
  margin: 0;
`;
const ButtonIcon = styled.img``;
const ImageWrapper = styled.section`
  width: 50%;
  @media screen and (max-width: 999px) {
    width: 45%;
  }
`;
const ImageSection = styled.div`
  height: 500px;
  width: 600px;
  @media screen and (max-width: 1200px) {
    width: 570px;
  }
  @media screen and (max-width: 1140px) {
    width: 555px;
  }
  @media screen and (max-width: 1110px) {
    width: 530px;
  }
  @media screen and (max-width: 1061px) {
    width: 500px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 873px) {
    width: 350px;
  }
`;
const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//  mobile view styling

const MobileContainer = styled.main`
  display: none;

  @media screen and (max-width: 787px) {
    display: block;
    background-color: #faede2;
    padding: 35px 75px;
  }
  @media screen and (max-width: 445px) {
    padding: 35px 45px;
  }
  @media screen and (max-width: 400px) {
    padding: 25px 25px;
  }
`;
const MoblileBodyWrapper = styled.section`
  margin: 35px 0;
`;
const MobileCatchPhrase = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.045em;
  color: #080b0c;
`;
const MobileHeaderBox = styled.div`
  background: #182d15;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 20px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 0 10px;
  margin: 35px 0;
`;
const MobileHeaderText = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 126%;
  text-align: justify;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #fdfbf8;
  text-align-last: justify;

  @media screen and (max-width: 330px) {
    font-size: 24px;
  }
`;
const MobileUseCaseList = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: -0.05em;
  color: #111e0f;
`;
const MobileImageBox = styled.img`
  width: 100%;
  margin: auto;
`;
const MobileTextBox = styled.div`
  position: relative;
`;

const MobileSpark = styled.img`
  position: absolute;
  top: -27%;
  left: -2.5%;

  @media screen and (max-width: 592px) {
    top: -24%;
    left: -3.5%;
  }
  @media screen and (max-width: 504px) {
    top: 42%;
    left: -4.5%;
  }
`;

const MobileText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;
  color: #111e0f;
`;
const MobileButtonWrapper = styled.div`
  text-align: center;
  margin-top: 35px;
`;
const MobileButton = styled.button`
  border: none;
  background: #111e0f;
  border-radius: 5px;
  padding: 13px 30px;
  color: #ebe5e5;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.045em;
  width: 90%;
`;
