import Grid from "@mui/material/Grid2";
import { Section } from "../../common/components/section/Section";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import contactImage from "../../assets/images/contact.jpg";

export const Contact = () => {
  const imageStyles = {
    height: "auto",
    width: "50%",
    borderRadius: "50%",
  };

  return (
    <Section title="Contact Us" background="#D8AC54">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            size={6}
            sx={{
              paddingRight: 5,
              background: "white",
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography variant="h5" color="primary" sx={{ marginBottom: 5 }}>
              Lorem
            </Typography>
            <Box sx={{ paddingBottom: 3 }}>
              <FormControl fullWidth>
                <TextField
                  id="input-name"
                  aria-describedby="my-helper-text"
                  label="Name"
                />
              </FormControl>
            </Box>
            <Box sx={{ paddingBottom: 3 }}>
              <FormControl fullWidth>
                <TextField
                  id="input-email"
                  aria-describedby="my-helper-text"
                  label="Email"
                />
              </FormControl>
            </Box>
            <Box sx={{ paddingBottom: 3 }}>
              <FormControl fullWidth>
                <TextField
                  rows={5}
                  multiline
                  id="input-message"
                  aria-describedby="my-helper-text"
                  label="Message"
                />
              </FormControl>
            </Box>
            <Box>
              <Button variant="outlined" fullWidth size="large">
                Send
              </Button>
            </Box>
          </Grid>
          <Grid
            size={6}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Box component="img" sx={imageStyles} src={contactImage} />
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
