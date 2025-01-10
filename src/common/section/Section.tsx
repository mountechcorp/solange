import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: string | JSX.Element;
  background?: string;
}

export const Section = ({
  title,
  children,
  background = "#DEDEDE",
}: SectionProps) => {
  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        background: background,
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 5 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};
