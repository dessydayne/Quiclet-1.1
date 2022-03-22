import React from 'react'
import styled from 'styled-components';
import mailImage  from '../assets/add_email.svg'
import { WithFormLayout } from '../components/formLayout'

export const MailCollection = WithFormLayout ( () => {
  return (
    // <FormContainer>
        <FormWrapper>
            <ImageSection>
                <ImageItem src={mailImage} />
            </ImageSection>
            <FormSection>
                <FormHeader>Be the first to know!</FormHeader>
                <FormPhrase>we’ll let you know as soon as we are 
                    ready to serve you. We promise.
                    </FormPhrase>
                <InputField placeholder='whats your mail?'/>
                <FormButton>Submit</FormButton>
            </FormSection>
        </FormWrapper>
    // </FormContainer>
  )
})

const FormContainer = styled.div``;
const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    column-gap: 30px;
`;
const ImageSection = styled.div``;
const ImageItem = styled.img`
    width: 100%;
`;
const FormSection = styled.div``;
const FormHeader = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #111E0F;
`;
const FormPhrase = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #111E0F;
`;
const InputField = styled.input`
    background: rgba(196, 196, 196, 0.5);
    border: 3px solid #EBE5E5;
    border-radius: 5px;
    padding: 12px  20px;
    width: calc(100% - 48px) ;
    margin: 8px 0;

`;
const FormButton = styled.button`
    width: 100%;
    padding: 10px 10px;
    background: #111E0F;
    border-radius: 5px;
    color: #FDFBF8;
    cursor: pointer;
    margin-top: 20px;
    // font-weight: 400;
    font-size: 18px;
`;