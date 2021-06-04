import {
  FooterSection,
  FooterContainer,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterText,
  FooterNewsletterForm,
  FooterNewsletterInput,
  FooterBtn,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  FooterLabel,
} from './footer.styles';
function Footer() {
  return (
    <div>
      <FooterSection>
        <FooterContainer>
          <FooterNewsletter>
            <FooterNewsletterTitle>F4CLOUD</FooterNewsletterTitle>
            <FooterNewsletterText>We create new cloud</FooterNewsletterText>
            <FooterNewsletterForm>
              <FooterLabel htmlFor="email">Email address</FooterLabel>
              <FooterNewsletterInput
                name="email"
                id="email"
                type="email"
                placeholder="Email address"
              />
              <FooterBtn>Submit</FooterBtn>
            </FooterNewsletterForm>
          </FooterNewsletter>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/about">Our Cloud</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Services</FooterLinkTitle>
                <FooterLink to="/service">How it works</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>Cloud UI</FooterLinkTitle>
                <FooterLink to="/@tester/">UI</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                <FooterLink to="/">Github</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterCopyRight>© F4CLOUD Inc. 2021. We love our users!</FooterCopyRight>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
