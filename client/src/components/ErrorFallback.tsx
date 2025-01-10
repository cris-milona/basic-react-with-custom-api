import { Box, Button, Typography } from "@mui/material";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <Box role="alert" display={"flex"} justifyContent={"center"}>
      <Typography>Something went wrong:</Typography>
      <Typography style={{ color: "red" }}>{error.message}</Typography>
      <Button onClick={resetErrorBoundary}>Reset</Button>
    </Box>
  );
};
