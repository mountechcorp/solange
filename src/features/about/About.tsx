import Grid from "@mui/material/Grid2";
import { Section } from "../../common/components/section/Section";
import { Box, Button, Modal, Typography } from "@mui/material";
import aboutImage from "../../assets/images/aboutus.jpg";
import { useState } from "react";

export const About = () => {
  const imageStyles = {
    height: "auto",
    width: "10%",
    borderRadius: "50%",
  };

  return (
    <Section title="About Me" background="#D8AC54" id="About">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            size={{ xs: 16, md: 6, lg: 12 }}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Box
              component="img"
              sx={imageStyles}
              width="200"
              src={aboutImage}
            />
          </Grid>

          <Grid
            size={{ xs: 16, md: 6, lg: 12 }}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Typography variant="subtitle1">Solange Lake</Typography>
          </Grid>

          <Grid
            size={{ xs: 16, md: 6, lg: 12 }}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Typography variant="subtitle2">-Sold By Sol-</Typography>
          </Grid>

          <Grid size={{ xs: 16, md: 6, lg: 12 }}>
            <Box sx={{ marginTop: 3 }}>
              My name is Solange Lake, and from a young age, I found joy in
              turning everyday materials into something beautiful. Raised in the
              vibrant, multicultural city of Mississauga, Ontario, in a
              hardworking middle-class family, I was constantly surrounded by
              creativity. Arts and crafts were my outlet, and I found endless
              inspiration in the diversity around me. As a Black female
              entrepreneur, I’ve always believed in the power of self-expression
              and the importance of nurturing creativity—not just in myself, but
              in others.
            </Box>

            <Box sx={{ marginTop: 3 }}>
              As I transitioned into adulthood, life’s practical
              demands—building a stable income and career—took priority, and my
              creative passions were quietly set aside. But they never
              disappeared. In November 2023, I made a bold return to my roots
              and launched Sold By Sol, a business born from purpose and
              passion.
            </Box>

            <Box sx={{ marginTop: 3 }}>
              With determination and vision, I’ve built more than a product
              line—I’ve created a platform to share meaningful, handmade goods
              that people can love, appreciate, and gift to others. Through this
              chapter, I’ve learned that creativity isn’t just about making
              beautiful things—it’s about building community, telling stories,
              and empowering others to follow what inspires them.
            </Box>

            <Box sx={{ marginTop: 3 }}>
              Seeing the joy my work brings to others has been one of the most
              rewarding parts of this journey. I’m excited to continue growing
              Sold By Sol, deepening connections in my community, and creating
              pieces that leave a lasting impression. This is more than a
              business - it's a creative movement grounded in purpose, passion
              and craftsmanship. And I'm just getting started.
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
