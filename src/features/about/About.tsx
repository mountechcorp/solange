import Grid from "@mui/material/Grid2";
import { Section } from "../../common/components/section/Section";
import { Box, Button, Link, Modal, Typography } from "@mui/material";
import aboutImage from "../../assets/images/aboutus.jpg";
import { useState } from "react";

export const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageStyles = {
    height: "auto",
    width: "50%",
    borderRadius: "50%",
  };

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const firstParagraph =
    "My name is Solange Lake, and I was raised in the vibrant city of Mississauga, Ontario, in ahardworking middle-class family. From a young age, I was always a creative child, constantly expressing myself through arts and crafts. I was surrounded by diverse cultures and creativity, which fuelled my passion for making and creating beautiful things. As a black female entrepreneur, I have always believed in the power of self-expression and the importance of nurturing one's creativity. However, as I transitioned into adulthood, my creative ambitions gradually took a back seat to the practicalities of life, such as building a stable income and career.";

  return (
    <Section title="About Us" background="#D8AC54">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Box component="img" sx={imageStyles} src={aboutImage} />
          </Grid>
          <Grid size={6}>
            <Typography variant="subtitle1">Solange Lake</Typography>
            <Typography variant="subtitle2">-SoldBySol-</Typography>
            <Box sx={{ marginTop: 3 }}>{firstParagraph}</Box>
            <Button color="secondary" variant="text" onClick={handleOpen}>
              Continue reading…
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyles}>
                <Box sx={{ marginTop: 3 }}>{firstParagraph}</Box>
                <Box sx={{ marginTop: 3 }}>
                  Despite this shift, my strong determination and ambition never
                  faded. I held onto the dream of pursuing my passion for
                  crafting. In November 2023, I took a significant step in
                  reclaiming m creative spirit and launched Sold By Sol. With
                  determination and hard work, this venture allowed me to fully
                  embrace my true calling—to create products that people will
                  love, appreciate, and share with their loved ones. Through my
                  journey, I have learned that exploring creativity is not just
                  about creating beautiful things; it's about building a
                  community and empowering others to follow their passions.
                  Seeing the joy that my products has brought to my clients has
                  been truly invaluable and inspiring. I am excited to continue
                  growing my business, fostering connections within my community
                  and hope to leave a lasting impact on those who encounter my
                  work. I am grateful for the journey that has led me here and
                  look forward to all the wonderful experiences and
                  opportunities that lie ahead.
                </Box>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
