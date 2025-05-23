import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const RequestQuote = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" sx={{ float: "right" }} onClick={handleOpen}>
        Request a Price Quote
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Request a Price Quote
          </Typography>
          <Typography id="modal-modal-title" variant="body1" component="h2">
            Thank you for your interest in our custom products! To receive an
            accurate price quote, please contact us directly. The price for your
            order will be based on several factors, including:
            <ul>
              <li>
                <strong>Cost of the Item</strong>: The base price of the
                product.
              </li>
              <li>
                <strong>Materials Used</strong>: The type and quality of
                materials required for your order.
              </li>
              <li>
                <strong>Quantity</strong>: The number of items you wish to
                order.
              </li>
              <li>
                <strong>Complexity of Design</strong>: Customization or
                intricate designs may require additional time and resources,
                which can affect pricing.
              </li>
            </ul>
            Please reach out to us at <strong>solbysolange@yahoo.com</strong>{" "}
            with the details of your order, and we will provide you with a
            personalized price quote. We are happy to work with you to meet your
            specific needs and budget.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
