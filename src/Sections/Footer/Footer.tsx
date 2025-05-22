import SocialMediaBox from "../../Components/Boxes/SocialMediaBox/SocialMediaBox";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer Container">
      <div className="FooterTop">
        <div className="FooterCol LogoCol">
          <img src="/Icons/Logo.svg" alt="Flora Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>

        <div className="FooterCol FlexCol">
          <h4>Service</h4>
          <a>Payment & Tax</a>
          <a>Features</a>
          <a>View Booking</a>
          <a>Support</a>
        </div>

        <div className="FooterCol FlexCol">
          <h4>About</h4>
          <a>About us</a>
          <a>News</a>
          <a>Pricing</a>
          <a>New Property</a>
        </div>

        <div className="FooterCol FlexCol">
          <h4>Our Location</h4>
          <a>2972 Westheimer Rd. Santa Ana, Illinois 85486</a>
          <div className="Socials Flex">
            <SocialMediaBox src="/Icons/facebook.svg" />
            <SocialMediaBox src="/Icons/twitter.svg" />
            <SocialMediaBox src="/Icons/LinkedIn.svg" />
          </div>
        </div>
      </div>

      <div className="FooterBottom Flex Between Items">
        <div>Copyright 2024 flora. All Rights Reserved</div>
        <div className="Flex Between FooterLinks">
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
