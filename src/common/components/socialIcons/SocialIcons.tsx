import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { TikTokIcon } from "../tikTokIcon/TickTokIcon";

export const SocialIcons = ({
  color = "secondary",
  ticktokColor = "#0000000",
}: {
  color?: any;
  ticktokColor?: string;
}) => {
  return (
    <>
      <Box
        component="a"
        href="https://www.instagram.com/_soldbysol/"
        target="_blank"
        sx={{ marginRight: 2 }}
      >
        <InstagramIcon color={color} />
      </Box>
      <Box
        component="a"
        sx={{ marginRight: 2 }}
        href="https://www.facebook.com/share/16AT66FjzV/?mibextid=wwXIfr"
        target="_blank"
      >
        <FacebookIcon color={color} />
      </Box>
      <Box
        component="a"
        sx={{ marginRight: 2 }}
        href="mailto:solbysolange@yahoo.com"
        target="_blank"
      >
        <EmailIcon color={color} />
      </Box>
      <Box
        component="a"
        href="https://www.tiktok.com/@sol.by.solange?_t=ZM-8wWZsUO3lVV&_r=1"
        target="_blank"
      >
        <TikTokIcon color={ticktokColor} />
      </Box>
    </>
  );
};
