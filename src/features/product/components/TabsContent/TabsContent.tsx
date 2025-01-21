import { Box } from "@mui/material";

interface TabsContentProps {
  children: JSX.Element;
  value: number;
  index: number;
}

export const TabsContent = ({
  children,
  value,
  index,
  ...other
}: TabsContentProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
