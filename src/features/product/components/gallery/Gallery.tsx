import { Box, ImageListItem, ImageList } from "@mui/material";
import { productsImage } from "../../productData";

export const Gallery = () => (
  <Box sx={{ width: "100%", height: 800, overflowY: "scroll" }}>
    <ImageList variant="masonry" cols={3} gap={8}>
      {productsImage.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);
