import {
  Box,
  ImageListItem,
  ImageList,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { RequestQuote } from "../requestQuote/RequestQuote";

interface IGallery {
  productList: IProductList[];
}

interface IProductList {
  img: string;
  title: string;
}

export const Gallery = ({ productList }: IGallery) => (
  <>
    <RequestQuote />
    <Box sx={{ width: "100%", overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {productList.map((item) => (
          <ImageListItem key={item.img} onClick={() => alert("clicked")}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </>
);
