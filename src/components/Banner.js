import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const styles = {
  banner: {
    backgroundColor: "#660362",
    padding: "30px",
  },
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
      style={styles.banner}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" style={styles.bannerTitle}>
        TELL US MORE&nbsp;
      </Typography>
      <img alt="teacher" src="tell_us_more.png" />
    </Box>
  );
}
