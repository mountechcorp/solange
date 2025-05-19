import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: string | JSX.Element;
  background?: string;
  id?: string;
}

export const Section = ({ title, children, background, id }: SectionProps) => {
  const boxStyles = () => ({
    paddingTop: 10,
    paddingBottom: 10,
    background: background,
    pl: { xs: 1, sm: 2, md: "15rem", lg: "15rem" },
    pr: { xs: 1, sm: 2, md: "15rem", lg: "15rem" },
  });

  return (
    <Box sx={boxStyles} id={id}>
      <Typography
        color={background ? "secondary" : "primary"}
        variant="h3"
        sx={{ marginBottom: 8, textAlign: "center" }}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};
