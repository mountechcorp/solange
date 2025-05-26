import { Box, Button, Grid, Typography } from "@mui/material";
import BannerImg from "../../assets/images/banner.jpg";

export const Banner = () => {
  const imageStyles = {
    backgroundImage: `url(${BannerImg})`,
    marginTop: "20px",
    top: "100%",
    backgroundPosition: "center",
    color: "black",
    backgroundRepeat: "no-repeat",
    height: "600px",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <Box sx={imageStyles}>
      <Box sx={{ pt: "100px" }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              p: { xs: 5, sm: 5, md: "6rem", lg: "6rem" },
              textAlign: "center",
            }}
            lg={16}
          >
            <Typography variant="h3" sx={{ mb: 4, color: "#5E6472" }}>
              The Perfect Gift Awaits
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 4, color: "5E6472" }}>
              Explore our collection of unique and thoughtful gifts.
            </Typography>

            <Button variant="contained" href="#Products">
              Shop now
            </Button>
            <Button
              sx={{ ml: 3 }}
              variant="outlined"
              color="secondary"
              href="#Contact"
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
