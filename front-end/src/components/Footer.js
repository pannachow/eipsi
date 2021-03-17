import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";

const styles = {
  text: {
    color: "white",
  },
};

export default function Footer() {
  return (
    <Box bgcolor="primary.main" py={4}>
      <Container>
        <Typography variant="h6" style={styles.text}>
          Contact Us
        </Typography>

        <Box display="flex" my={1}>
          <RoomIcon style={styles.text} />
          <Typography variant="subtitle1" style={styles.text}>
            &nbsp;&nbsp;Amsterdam, The Netherlands
          </Typography>
        </Box>
        <Box display="flex" my={1}>
          <MailOutlineIcon style={styles.text} />
          <Link underline="none" href="mailto:chowpanna@gmail.com">
            <Typography style={styles.text} variant="subtitle1">
              &nbsp;&nbsp;chowpanna@gmail.com
            </Typography>
          </Link>
        </Box>
        <Box display="flex" my={1}>
          <LanguageIcon style={styles.text} />
          <Link underline="none" href="https://digitalsocietyschool.org/project/eipsi">
            <Typography style={styles.text} variant="subtitle1">
              &nbsp;&nbsp;https://digitalsocietyschool.org/project/eipsi
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
