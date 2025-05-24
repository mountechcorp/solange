import { Box, Typography } from "@mui/material";
import { Section } from "../../common/components/section/Section";
import { Header } from "../../features";
import { Footer } from "../../features/footer/Footer";

export const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <Section>
        <>
          <Typography variant="h5" sx={{ mb: 3, mt: 4 }}>
            Terms & Conditions
          </Typography>
          <ol>
            <li>
              <strong>Payments</strong>
              <Box>
                All major credit cards, e-transfer, cash **Please note for bulk
                orders a 50% deposit will be required at the time of order
              </Box>
            </li>
            <li>
              <strong>Order Processing Times:</strong>
              <Box>
                At Sold By Sol, I strive to process and ship all orders as
                quickly as possible. Please review the following details
                regarding our order processing times:
                <ol>
                  <li>
                    <strong>Standard Order Processing Time:</strong>
                    <Box>
                      Our typical order processing time is{" "}
                      <strong>2-3 weeks</strong> from the date the order is
                      placed. This allows us time to carefully prepare, package,
                      and ship your order.
                    </Box>
                  </li>
                  <li>
                    <strong>Peak Season Processing Times:</strong>
                    <Box>
                      During peak seasons (such as holidays or sales events),
                      order processing times may be longer due to high order
                      volumes. We will notify you if there are any significant
                      delays that may affect your order's processing time.
                    </Box>
                  </li>
                  <li>
                    <strong>Customized Orders:</strong>
                    <Box>
                      For customized or personalized items, the order processing
                      time may vary depending on the complexity of the
                      customization. The estimated processing time for these
                      orders will be{" "}
                      <strong> confirmed at the time of ordering</strong>.
                      Please note that these items may require additional time
                      to ensure they meet your specifications.
                    </Box>
                  </li>
                  <li>
                    <strong>Order Status Updates:</strong>
                    <Box>
                      Once your order has been processed and shipped, you will
                      receive a shipping confirmation with tracking information.
                      We will keep you informed every step of the way.
                    </Box>
                    <Box>
                      If you have any questions or concerns about your order
                      processing time, please feel free to contact us at
                      solbysolange@yahoo.com. We appreciate your patience and
                      understanding.
                    </Box>
                  </li>
                </ol>
              </Box>
            </li>
            <li>
              <strong>Order Cancellations</strong>
              <Box>
                Orders may be cancelled within <strong>3 days</strong> of the
                original order date. To cancel an order, please contact us via
                email with your order details. Cancellations made after this
                5-day window will incur a <strong>20% cancellation fee</strong>{" "}
                based on the total order cost.
              </Box>
            </li>
            <li>
              <strong>Refunds & Returns</strong>
              <Box>
                All items are <strong>non-refundable </strong>unless there is a
                manufacturing defect. If you believe your item is defective,
                please contact us within <strong>1 week</strong> of receiving
                the product. We may request photographic evidence of the defect
                to assess the issue. If the item is confirmed to have a
                manufacturing defect, we will either repair, replace, or refund
                the product at our discretion.
              </Box>
            </li>
            <li>
              <strong>Care Instructions</strong>
              <Box>
                Please follow all care instructions provided with your product.
                Merchandise that has been damaged due to improper care or
                handling will not be eligible for a refund or exchange. We
                encourage customers to keep and follow care guidelines to ensure
                the longevity of your products.
              </Box>
            </li>
            <li>
              <strong>Incorrect Orders</strong>
              <Box>
                If you receive an incorrect item (e.g., wrong colour, size, or
                product, incorrect spelling), please contact us immediately. We
                will provide a <strong>free replacement </strong>for any
                incorrect items. In the event of an incorrect order, we will
                cover the cost of return shipping and send out the correct item
                as soon as possible.
              </Box>
            </li>
            <li>
              <strong>Shipping & Delivery</strong>
              <Box>
                Once an order has been placed and payment is confirmed, we will
                ship your items to the address provided at checkout. Please
                ensure all details are correct before submitting your order.
                Estimated delivery times, tracking info and cost will be
                provided at the time of order.We are not responsible for delays
                caused by third-party carriers or inaccurate shipping
                information.
              </Box>
            </li>
            <li>
              <strong>Damage During Shipping Disclaimer</strong>
              <Box>
                At Sold By Sol, I take great care in packaging and shipping your
                items to ensure they arrive safely and in perfect condition.
                However, please note the following regarding damage that may
                occur during the shipping process:
                <ol>
                  <li>
                    <strong>Responsibility for Shipping Damage:</strong>
                    While I make every effort to securely package your items,
                    once an order has been shipped, it is in the hands of the
                    carrier. We cannot assume responsibility for damages that
                    occur during transit.
                  </li>
                  <li>
                    <strong>Inspection of Products Upon Arrival:</strong>
                    Upon receiving your order, please inspect the packaging and
                    items immediately. If any damage is noticed, please contact
                    us within 48 hours of receiving the item. We may request
                    photos of the damage and the packaging to file a claim with
                    the carrier.
                  </li>
                  <li>
                    <strong>Claims for Shipping Damage:</strong>
                    If your item is damaged during shipping, I will assist you
                    in filing a claim with the shipping carrier, where
                    applicable. In certain cases, we may offer to replace or
                    refund the item at our discretion, subject to the carrier's
                    determination of fault.
                  </li>
                  <li>
                    <strong>Insurance and Carrier Responsibility:</strong>
                    For valuable or fragile items, we recommend purchasing
                    shipping insurance at checkout. This helps to ensure that
                    you are covered in the event of damage during shipping. We
                    are not liable for any loss or damage incurred once the
                    package has been shipped.
                  </li>
                </ol>
              </Box>
              <li>
                <strong>Changes to Terms & Conditions</strong>
                <Box>
                  We reserve the right to update or modify these terms and
                  conditions at any time. Any changes will be posted on our
                  website, and your continued use of our services constitutes
                  acceptance of these changes.
                </Box>
              </li>
            </li>
          </ol>
        </>
      </Section>
      <Footer />
    </>
  );
};
