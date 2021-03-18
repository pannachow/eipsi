import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

export default function Content({ children, filled }) {
  const props = filled ? { bgcolor: "primary.main" } : {};

  return (
    <Box {...props} flexGrow={1} py={4}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
}
