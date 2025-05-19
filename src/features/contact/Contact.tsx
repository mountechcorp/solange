import Grid from "@mui/material/Grid2";
import { Section } from "../../common/components/section/Section";
import { Box, Button, Typography } from "@mui/material";
import contactImage from "../../assets/images/contact.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InputField from "./components/InputField";
import { TikTokIcon } from "./components/TickTokIcon";

export const Contact = () => {
  const imageStyles = {
    height: "auto",
    width: "50%",
    borderRadius: "50%",
  };

  const formCustomStyles = {
    paddingRight: 5,
    background: "white",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    padding: "20px",
    borderRadius: "4px",
  };

  return (
    <Section title="Contact Us" background="#D8AC54" id="Contact">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 16, md: 6, lg: 6 }} sx={formCustomStyles}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ marginBottom: 5, textAlign: "center" }}
            >
              Get in touch with us
            </Typography>

            <InputField
              id="input-name"
              label="Name"
              ariaDescribedby="form-name"
            />
            <InputField
              id="input-email"
              label="Email"
              ariaDescribedby="form-email"
            />
            <InputField
              id="input-message"
              label="Message"
              ariaDescribedby="form-message"
              rows={5}
              multiline
            />
            <Box>
              <Button variant="outlined" fullWidth size="large">
                Send
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 16, md: 6, lg: 6 }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              display="flex"
              alignItems="center"
            >
              <Box component="img" sx={imageStyles} src={contactImage} />
            </Grid>

            <Grid
              container
              spacing={2}
              justifyContent="center"
              display="flex"
              alignItems="center"
              sx={{ marginTop: 5 }}
            >
              <InstagramIcon />
              <FacebookIcon />
              <EmailIcon />
              <TikTokIcon />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
