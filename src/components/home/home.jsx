import React from "react";
import {
  BarChartWrapper,
  ChartTitle,
  ChartWrapper,
  HomeBox,
  HomeBoxText,
  HomeBoxWrapper,
  HomeContainer,
  HomeTitleWrapper,
  LineChartWrapper,
  TableChartWrapper,
  Text,
  Title,
} from "../styles/homeStyle";
// import { Box, ThemeProvider } from "@mui/material";
import LineChartComponent from "./charts/lineChart";
import BarChartComponent from "./charts/barChart";
import TableChartComponent from "./charts/table";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";


const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeTitleWrapper>
        <Title>Dashboard.</Title>
        <Text>Dashboard</Text>
      </HomeTitleWrapper>

      {/* <HomeBoxWrapper>
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#006DAB",
                dark: "#007FFF",
              },
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              width: 300,
              height: 100,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "white",
                color: "#006DAB",
                border: "2px solid #006DAB",
                fontWeight: "700",

                // boxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HomeBoxText>Motor</HomeBoxText>
          </Box>
        </ThemeProvider>

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#006DAB",
                dark: "#007FFF",
              },
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              width: 300,
              height: 100,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "white",
                color: "#006DAB",
                border: "2px solid #006DAB",
                fontWeight: "700",

                // boxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HomeBoxText>Caravan</HomeBoxText>
          </Box>
        </ThemeProvider>

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#006DAB",
                dark: "#007FFF",
              },
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              width: 300,
              height: 100,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "white",
                color: "#006DAB",
                border: "2px solid #006DAB",
                fontWeight: "700",

                // boxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HomeBoxText>Tuning</HomeBoxText>
          </Box>
        </ThemeProvider>

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#006DAB",
                dark: "#007FFF",
              },
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              width: 300,
              height: 100,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "white",
                color: "#006DAB",
                border: "2px solid #006DAB",
                fontWeight: "700",

                // boxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HomeBoxText>Used Cars</HomeBoxText>
          </Box>
        </ThemeProvider>
      </HomeBoxWrapper> */}



    <HomeBoxWrapper>
      <HomeBox>
      <Accordion sx={{width: "300px", border: "1px solid  #006DAB",}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon  sx={{color: "white"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: '#006DAB', 
            color: 'white', 
            width: "300px", 
            height: "100px",
            
            '&:hover': {
              backgroundColor: 'white',
              color: '#006DAB',
              border: "1px solid #006DAB"
              
            },
          }}
        >
          <HomeBoxText>Motor</HomeBoxText>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{display: "flex", flexDirection: "column"}}>
            <p>Last orders: 10</p>
            <p>Locations: 4</p>
            <p>Total price: 876,000$</p>
            <Link to="motor">More info</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </HomeBox>
     
      <HomeBox>
      <Accordion sx={{width: "300px", border: "1px solid  #006DAB",}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon  sx={{color: "white"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: '#006DAB', 
            color: 'white', 
            width: "300px", 
            height: "100px",
            
            '&:hover': {
              backgroundColor: 'white',
              color: '#006DAB',
              border: "1px solid #006DAB"
              
            },
          }}
        >
          <HomeBoxText>Caravan</HomeBoxText>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display: "flex", flexDirection: "column"}}>
            <p>Last orders: 7</p>
            <p>Locations: 2</p>
            <p>Total price: 276,000$</p>
            <Link to="caravan">More info</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </HomeBox>

     <HomeBox>
      <Accordion sx={{width: "300px", border: "1px solid  #006DAB",}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon  sx={{color: "white"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: '#006DAB', 
            color: 'white', 
            width: "300px", 
            height: "100px",
            
            '&:hover': {
              backgroundColor: 'white',
              color: '#006DAB',
              border: "1px solid #006DAB"
              
            },
          }}
        >
          <HomeBoxText>Tuning</HomeBoxText>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display: "flex", flexDirection: "column"}}>
            <p>Last orders: 20</p>
            <p>Locations: 8</p>
            <p>Total price: 1,876,000$</p>
            <Link to="tuning">More info</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </HomeBox>
      
      <HomeBox>
      <Accordion sx={{width: "300px", border: "1px solid  #006DAB",}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon  sx={{color: "white"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: '#006DAB', 
            color: 'white', 
            width: "300px", 
            height: "100px",
            
            '&:hover': {
              backgroundColor: 'white',
              color: '#006DAB',
              border: "1px solid #006DAB"
              
            },
          }}
        >
          <HomeBoxText>Used Cars</HomeBoxText>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display: "flex", flexDirection: "column"}}>
            <p>Last orders: 18</p>
            <p>Locations: 10</p>
            <p>Total price: 576,000$</p>
            <Link to="usedcar">More info</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </HomeBox>

      </HomeBoxWrapper>





      <ChartWrapper>
        <LineChartWrapper>
          <ChartTitle>Demand</ChartTitle>
          <LineChartComponent />
        </LineChartWrapper>

        <BarChartWrapper>
        <ChartTitle>Income</ChartTitle>
          <BarChartComponent />
        </BarChartWrapper>
      </ChartWrapper>
      <TableChartWrapper>
      <ChartTitle>Users</ChartTitle>
      <TableChartComponent/>
      </TableChartWrapper>
    </HomeContainer>
  );
};

export default HomeComponent;
