import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button component={Link} to="/" style={{ textDecoration: "none", color: "white" }}>Home</Button>
          <Button component={Link} to="/add" style={{ textDecoration: "none", color: "white" }}>Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
