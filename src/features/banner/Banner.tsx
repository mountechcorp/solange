import { Box, Grid, Typography } from "@mui/material";
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
          <Grid lg={6}></Grid>
          <Grid sx={{ p: { xs: 5, sm: 5, md: "6rem", lg: "6rem" } }} lg={6}>
            <Typography variant="h3">Lorem ipsum dolor sit</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              qui magnam. Odit assumenda praesentium voluptatem dolores ad
              laborum sit eius voluptatibus commodi eveniet, laudantium,
              accusamus repudiandae maxime doloremque? Aperiam, eius.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
