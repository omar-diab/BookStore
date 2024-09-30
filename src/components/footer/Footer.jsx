import "./footer.css";
import FooterSocials  from './FooterSocials'
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footer">
        <FooterSocials />
        <FooterLinks />
    </footer>
  );
};

export default Footer;
