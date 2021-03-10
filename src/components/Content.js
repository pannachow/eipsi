import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

export default function Content({ component, filled }) {
  const optionalProps = filled
    ? {
        bgcolor: "#660362",
      }
    : {};
  return (
    <Box flexGrow={1} py={4} {...optionalProps}>
      <Container>{component}</Container>
    </Box>
  );
}
