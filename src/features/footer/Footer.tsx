import { Box, Grid } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import LogoImg from "../../assets/images/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <Section background="#000000">
      <>
        <Box src={LogoImg} component="img" sx={{ width: 70 }}></Box>
        <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 0 }}>
          <InstagramIcon color="primary" />
          <FacebookIcon color="primary" />
          <EmailIcon color="primary" />
        </Grid>
      </>
    </Section>
  );
};
