import { Box } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import LogoImg from "../../assets/images/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { SocialIcons } from "../../common/components/socialIcons/SocialIcons";

export const Footer = () => {
  return (
    <Section background="#000000">
      <>
        <Box src={LogoImg} component="img" sx={{ width: 70 }}></Box>

        <Box sx={{ mt: 3 }}>
          <SocialIcons color="primary" ticktokColor="#D8AC54" />
        </Box>
      </>
    </Section>
  );
};
