import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: string | JSX.Element;
  background?: string;
}

export const Section = ({
  title,
  children,
  background = "#FFFFFF",
}: SectionProps) => {
  const boxStyles = () => ({
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: "15rem",
    paddingRight: "15rem",
    background: background,
  });

  return (
    <Box sx={boxStyles}>
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
