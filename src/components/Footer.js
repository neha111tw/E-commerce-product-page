import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  LocalShipping,
  AssignmentReturn,
  Policy,
  Home,
  Category,
  NewReleases,
  LocalOffer,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      component="footer"
      elevation={0}
      square
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                YourStore
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              Your trusted e-commerce platform offering quality products with
              fast delivery and excellent customer service.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton aria-label="Facebook" color="primary">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="primary">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" color="primary">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Home
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Home
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Category
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Products
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Category
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Categories
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <NewReleases
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    New Arrivals
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalOffer
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Deals & Offers
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Email
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Contact Us
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Policy
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    FAQ
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <LocalShipping
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Shipping Policy
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <AssignmentReturn
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Returns & Refunds
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Policy
                    fontSize="small"
                    sx={{ mr: 1, color: "primary.main" }}
                  />
                  <Link href="#" color="text.secondary" underline="hover">
                    Privacy Policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <LocationOn
                fontSize="small"
                sx={{ mr: 1, mt: 0.5, color: "primary.main" }}
              />
              <Typography variant="body1" color="text.secondary">
                123 Store Street, City, Country
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email fontSize="small" sx={{ mr: 1, color: "primary.main" }} />
              <Link
                href="mailto:support@example.com"
                color="text.secondary"
                underline="hover"
              >
                support@example.com
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone fontSize="small" sx={{ mr: 1, color: "primary.main" }} />
              <Link
                href="tel:+11234567890"
                color="text.secondary"
                underline="hover"
              >
                +1 (123) 456-7890
              </Link>
            </Box>

            {/* Newsletter Subscription */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Subscribe to our newsletter
              </Typography>
              <Box sx={{ display: "flex" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    padding: "8px 12px",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "4px 0 0 4px",
                    flexGrow: 1,
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "0 4px 4px 0",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your E-Commerce Store. All rights
            reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: isMobile ? 2 : 0,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              style={{ height: 16 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              style={{ height: 16 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              style={{ height: 16 }}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
