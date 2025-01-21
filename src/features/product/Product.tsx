import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import { Gallery } from "./components/gallery/Gallery";
import { useState } from "react";
import { TabsContent } from "./components/TabsContent/TabsContent";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Product = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Section title="Products">
      <>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: 5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam
          quam, cupiditate esse, repellat dolore illum quos ipsam deleniti non
          voluptas enim! Cumque tenetur laudantium quod provident, incidunt
          doloribus nam.
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Drink ware" {...a11yProps(0)} />
            <Tab label="Apparel" {...a11yProps(1)} />
            <Tab label="Cards/Invitations" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabsContent value={value} index={0}>
          <Gallery />
        </TabsContent>
        <TabsContent value={value} index={1}>
          <Gallery />
        </TabsContent>
        <TabsContent value={value} index={2}>
          <Gallery />
        </TabsContent>
      </>
    </Section>
  );
};
