import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import AccountMenu from "./account";
import Badge from '@mui/material/Badge';
import {
  Logo,
  NavLeftBox,
  NavRightBox,
  NavbarContainer,
  SearchWrapper,
} from "../styles/styled";
import { Link } from "react-router-dom";

export default function NavbarComponent() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    //sideBar
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#FAFAFA",
        color: "#006DAB",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Logo $blueColor $padding >
        Camper
      </Logo>
      <Divider sx={{ backgroundColor: "#006DAB" }} />
      <List sx={{}}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#006DAB" }}>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/" style={{textDecoration: "none"}}>
          <p>Dashboard</p>
          </Link>
        </ListItemButton>
      </List>
      <Divider sx={{ backgroundColor: "#006DAB" }} />
      <List sx={{}}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#006DAB" }}>
            <CarRentalIcon />
          </ListItemIcon>
          <Link to="motor">
          <p>Motor</p>
          </Link>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#006DAB" }}>
          <Badge  badgeContent={4} color="primary">
            <AirportShuttleIcon />
          </Badge>
          </ListItemIcon>
          <Link to="caravan">
          <p>Caravan</p>
          </Link> 
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#006DAB" }}>
            <ElectricCarIcon />
          </ListItemIcon>
          <Link to="tuning">
          <p>Tuning</p>
          </Link>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#006DAB" }}>
            <CarRepairIcon />
          </ListItemIcon>
          <Link to="usedcar">
          <p>Used Cars</p>
          </Link>
        </ListItemButton>

      </List>

    </Box>
  );

  return (
    //navbar default
    <NavbarContainer>
      <NavLeftBox>
      <Link to="/" style={{textDecoration: "none"}}>
        <Logo $displayNone>Camper</Logo>
      </Link>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "white" }}></MenuIcon>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </NavLeftBox>

      <NavRightBox>
        <SearchWrapper>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "25ch",
              color: "white",
              backgroundColor: "white",
              borderRadius: "5px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Search"
              id="outlined-size-small"
              // defaultValue="Search"
              size="search"
              sx={{ color: "white" }}
            />
          </div>
        </Box>
        </SearchWrapper>

        <AccountMenu />
      </NavRightBox>
    </NavbarContainer>
  );
}
