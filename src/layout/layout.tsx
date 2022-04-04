import { Container, Grid } from "@mui/material";
import useStorage from "../hooks/useStorage";

const Layout: React.FC = ({ children }) => {
  const { authStorage } = useStorage();

  console.log(authStorage());
  return (
    <Container>
      <Grid container>
        <Grid item>Hello</Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
