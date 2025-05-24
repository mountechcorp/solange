import { Box } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import LogoImg from "../../assets/images/logo.svg";
import { SocialIcons } from "../../common/components/socialIcons/SocialIcons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Section background="#000000">
      <>
        <Box src={LogoImg} component="img" sx={{ width: 70 }}></Box>

        <Box sx={{ mt: 3 }}>
          <SocialIcons color="primary" ticktokColor="#D8AC54" />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link
            style={{ color: "#D8AC54" }}
            to="/privacy-policy"
            reloadDocument
          >
            Privacy Policy
          </Link>
        </Box>
        <Box>
          <Link
            style={{ color: "#D8AC54" }}
            to="/terms-and-conditions"
            reloadDocument
          >
            Terms & Conditions
          </Link>
        </Box>
      </>
    </Section>
  );
};
