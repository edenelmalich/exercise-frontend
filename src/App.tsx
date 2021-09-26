import React, { useState } from 'react';
import Products from "./components/Products";
import { Toolbar, Typography, AppBar, TextField } from '@mui/material';

function App() {
  const [searchInput, setSearchInput] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="App">
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            color="primary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Products
          </Typography>
          <TextField
            id="outlined-name"
            label="Search"
            value={searchInput}
            size="small"
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
      <Products searchInput={searchInput}/>
    </div>
  );
}

export default App;
