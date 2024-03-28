import React from "react";
import { Box, Spinner } from "./Loading.styled";

const LoadingSpinner: React.FC = () => {
  return (
    <Box>
      <Spinner />
    </Box>
  );
};

export default LoadingSpinner;
