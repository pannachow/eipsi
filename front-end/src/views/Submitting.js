import { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const styles = {
  dots: {
    display: "inline-block",
    width: "32px",
    textAlign: "left",
  },
};

export default function Submitting() {
  let [dots, setDots] = useState(".");
  useEffect(() => {
    let interval = setInterval(() => {
      let count = dots.length === 5 ? 1 : dots.length + 1;
      setDots(".".repeat(count));
    }, 500);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Box color="white" py="60px">
        <Typography variant="h2" align="center" paragraph>
          Submitting <span style={styles.dots}>{dots}</span>
        </Typography>
        <Typography variant="body" align="center" paragraph>
          First submission may take a while. Please stand by.
        </Typography>
      </Box>
    </>
  );
}
