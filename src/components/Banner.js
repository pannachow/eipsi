import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const styles = {
  bannerTitle: {
    fontFamily: "Poppins",
    color: "#A9F6FF",
    fontWeight: 800,
    fontSize: "64px",
    fontStyle: "Bold",
    lineHeight: "96px",
  },
};

export default function appBar() {
  return (
    <Box
      bgcolor="#660362"
      py={4}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" style={styles.bannerTitle}>
        TELL US MORE&nbsp;&nbsp;
      </Typography>
      <img alt="Chat bubble" src="tell-us-more.png" />
    </Box>
  );
}
