import { Box, Link } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import LogoImg from "../../assets/images/logo.svg";
import { SocialIcons } from "../../common/components/socialIcons/SocialIcons";

export const Footer = () => {
  return (
    <Section background="#000000">
      <>
        <Box src={LogoImg} component="img" sx={{ width: 70 }}></Box>

        <Box sx={{ mt: 3 }}>
          <SocialIcons color="primary" ticktokColor="#D8AC54" />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link sx={{ mt: 5, cursor: "pointer" }} href="/privacy-policy">
            Privacy Policy
          </Link>
        </Box>
        <Box>
          <Link sx={{ mt: 5, cursor: "pointer" }} href="/terms-and-conditions">
            Terms & Conditions
          </Link>
        </Box>
      </>
    </Section>
  );
};
