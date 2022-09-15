import React from 'react';
import styled from 'styled-components';

import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';

const CONTACT_ITEMS = [
  {
    title: 'Name'
  },
  {
    title: 'Phone',
  },
  {
    title: 'Role',
  },
  {
    title: 'Email',
  },
];

const StyledContactContent = styled.section`
  padding: 2rem 1rem;
  grid-area: skill;
  background-color: ${props => props.theme.colors.white};
  margin: 1rem;
  position: relative;
  display: grid;
  grid-template-areas:
    "contactPrimary"
    "contactSecondary";
  

  ${props => props.theme.media.medium`
     padding: 3rem;
     grid-template-column: repeat(2, 1fr);
  `}

  ${props => props.theme.media.large`
     padding: 3rem;
  `}
`;

const StyledContactPrimary = styled.div`
  grid-area: contactPrimary;

`;


const StyledContactSecondary = styled.div`
  grid-area: contactSecondary;
`;

const StyledDescription = styled(Paragraph)`
  margin: 0 0 2rem 0;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.black};
    opacity: 0.10;

  }
`;

const StyledConactInfoWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  ${props => props.theme.media.medium`
    
  `}
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex: 50%;
  margin: 0 0 1rem 0;
`;

const StyledContactInfoTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.body};
  width: 100%;
  font-size: 1rem;
`;

const StyledContactInfoContent = styled.p`
  margin: 0;
  width: 100%;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  color: ${props => props.theme.colors.blueDark};
  font-size: 1.25rem;
`;

const StyledContactInfoLink = styled.a`
  margin: 0;
  width: 100%;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  color: ${props => props.theme.colors.blueDark};
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s;

  &:visited {
    color: ${props => props.theme.colors.blueDark};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.orange};
  }

  &:active {
    color: ${props => props.theme.colors.orangeActive};
  }

  
`;

const StyledContactSocialWrapper = styled.div`

`;

const StyledContactSubtitle = styled.p`
  color: ${props => props.theme.colors.blueDark};
  font-size: ${props => props.theme.fontSize.subTitle};
  font-family: ${props => props.theme.fonts.title};
  margin: 0;
`;

const StyledContactSocialLink = styled.a`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  color: ${props => props.theme.colors.blueDark};
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s;
  margin: 1rem 1.5rem 0 0;
  text-transform: uppercase;
  position: relative;

   &:visited {
    color: ${props => props.theme.colors.blueDark};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.orange};
  }

  &:active {
    color: ${props => props.theme.colors.orangeActive};
  }


  &::before {
    content: '';
    width: 10px;
    height: 1px;
    background-color: ${props => props.theme.colors.black};
    opacity: 0.10;
    position: absolute;
    left: -1rem;
    top: calc(1rem - 1px);
  }

  &:first-child {
    &::before {
      content: none;
    }
  }

 
`;

const StyledContactSocialLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;


const contactContent = (props) => {
  const CONTACT_VALUES = [
    props.data.contactName, 
    props.data.contactPhone,
    props.data.contactRole, 
    props.data.contactEmail,
  ]

  CONTACT_ITEMS.forEach((item, index) => {
    item.value = CONTACT_VALUES[index];
  });

  return (
    <StyledContactContent>
      <StyledContactPrimary>
        <Title
          type='5'
          color='blueDark'
          content={props.data.contactTitle} />
        <StyledDescription 
        color='grayDark'
        fontSize='body'
        fontFamily='body'
        content={props.data.contactDescription} />
        <StyledConactInfoWrapper>
          {CONTACT_ITEMS.map((item, index) => {
            if (item.title === 'Phone') {
              return <StyledContactInfo key={index}>
                <StyledContactInfoTitle>
                  {item.title}
                </StyledContactInfoTitle>
                <StyledContactInfoLink
                  href={`tel:${item.value}`}
                  target='_blank'>
                  {item.value}
                </StyledContactInfoLink>
              </StyledContactInfo>

            } else if (item.title === 'Email') {
              return <StyledContactInfo key={index}>
                <StyledContactInfoTitle>
                  {item.title}
                </StyledContactInfoTitle>
                <StyledContactInfoLink
                  href={`mailto:${item.value}`}
                  target='_blank'>
                  {item.value}
                </StyledContactInfoLink>
              </StyledContactInfo>
            } else {
              return <StyledContactInfo key={index}>
                <StyledContactInfoTitle>
                  {item.title}
                </StyledContactInfoTitle>
                <StyledContactInfoContent>
                  {item.value}
                </StyledContactInfoContent>
              </StyledContactInfo>
            }
          })}
        </StyledConactInfoWrapper>
        <StyledContactSocialWrapper>
          <StyledContactSubtitle>
            {props.data.socialMediaTitle}
          </StyledContactSubtitle>
          <StyledContactSocialLinks>
            {props.data.socialMedia.map((item, index) => (
              <StyledContactSocialLink
              key={index} 
              href={item.socialMediaItemLink}
              target='_blank'>
                {item.socialMediaItemTitle}
              </StyledContactSocialLink>
            ))}
          </StyledContactSocialLinks>
        </StyledContactSocialWrapper>
      </StyledContactPrimary>
      <StyledContactSecondary>

      </StyledContactSecondary>
    </StyledContactContent>
  );
}

export default contactContent;