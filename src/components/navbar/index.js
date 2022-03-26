import React, { useState } from "react";
import styled from "styled-components";
import instagramLogo from "../../assets/instagram_logo.svg";
import twitterLogo from "../../assets/twitter_logo.svg";
import linkedinLogo from "../../assets/linkedin_logo.svg";
import logoImage from "../../assets/full_logo.svg";
import hamburgerIcon from "../../assets/hamburger_icon.svg";


export const Navbar = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoSection>
          <Logo src={logoImage} />
        </LogoSection>
        <SocialsSection>
          <SocialMedia>
            <SocialMediaIcon>
              <Icon src={twitterLogo} />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <Icon src={linkedinLogo} />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <Icon src={instagramLogo} />
            </SocialMediaIcon>
          </SocialMedia>
        </SocialsSection>
      </HeaderWrapper>
    </>
  );
};



export const MobileNavigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleToggle = () => {
    setShowNavbar((prev) => !prev);
  };
  return (
    <>
      {showNavbar ? (
        <NavbarContainer>
          <NavContainer onClick={() => setShowNavbar(false)}></NavContainer>
          <NavWrapper>
            <NavItem>
              <SocialMediaIcon>
                <NavIcon src={twitterLogo} />
              </SocialMediaIcon>
              <NavTitle>Twitter</NavTitle>
            </NavItem>
            <NavItem>
              <SocialMediaIcon>
                <NavIcon src={linkedinLogo} />
              </SocialMediaIcon>
              <NavTitle>LinkedIn</NavTitle>
            </NavItem>
            <NavItem>
              <SocialMediaIcon>
                <NavIcon src={instagramLogo} />
              </SocialMediaIcon>
              <NavTitle>Instagram</NavTitle>
            </NavItem>
          </NavWrapper>
        </NavbarContainer>
      ) : (
        ""
      )}
      <MobileHeader>
        <MobileLogoContainer>
          <MobileLogo src={logoImage} />
        </MobileLogoContainer>
        <MobileNavbar onClick={handleToggle}>
          <HamburgerIcon src={hamburgerIcon} />
        </MobileNavbar>
      </MobileHeader>
    </>
  );
};

// navbar style
const NavbarContainer = styled.div`
  display: none;

  @media (max-width: 787px) {
    display: block;
    height: 100%;
    width: 100vw;
    background-color: transparent;
    position: relative;
  }
`;
const NavContainer = styled.div`
  display: none;

  @media (max-width: 787px) {
    display: block;
    height: 100%;
    width: 100vw;
    background-color: transparent;
    z-index: 5;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
  }
`;

const NavWrapper = styled.div`
  background: rgba(109, 65, 65, 0.95);
  box-shadow: -4px 5px 15px 4px rgba(0, 0, 0, 0.25);
  width: 12em;
  padding: 25px;
  z-index: 10;
  position: fixed;
  height: 70vh;
  right: 0;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
`;
const NavIcon = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: justify;
  margin-left: 15px;
  color: #f4f0ec;
`;

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoSection = styled.div``;
const Logo = styled.img``;
const SocialsSection = styled.div``;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialMediaIcon = styled.div`
    background: #010101;
    border-radius: 25px;
    padding: 11px 10px;
    margin: auto 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
  width: 23px;
`;

// mobile view
const MobileHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MobileLogoContainer = styled.div``;
const MobileLogo = styled.img``;
const MobileNavbar = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;
const HamburgerIcon = styled.img``;
