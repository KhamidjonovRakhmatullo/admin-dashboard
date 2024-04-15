import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "../mock/mock";
import { Button, Checkbox } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function Templete() {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300, border: "2px solid red", borderRadius: "25px" }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />




      <Button variant="text" color="error">
        Text
      </Button>
      <Button variant="contained" color="warning">
        Contained
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>

      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="error">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>




      <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28,}}}
      />
    </div>




     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>


    
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
