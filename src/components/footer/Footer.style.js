import { Stack, alpha, styled } from "@mui/material";

export const FooterWrapStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.footer.backgroundColor,
}));