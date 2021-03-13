import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

export default function Content({ children }) {
  return (
    <Box bgcolor="primary.main" flexGrow={1} py={4}>
      <Container>{children}</Container>
    </Box>
  );
}
