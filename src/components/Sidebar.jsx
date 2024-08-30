import React from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  List,
  Box,
} from "@mui/material";
import "./Sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import SpeakerList from "./SpeakerList";
import searchIcon from "../utils/images/search-icon.svg";
import {
  drawerStyle,
  addSpeakerDrawerHeading,
  searchTextField,
  listStyle,
  addSpeakerBottomContainer,
  addSpeakerBottomButtonStyle,
  createSpeakerText,
} from "../utils/CSSModule/CSSmodule";

const Sidebar = ({
  isOpen,
  handleClose,
  speakers,
  handleSearch,
  handleSelect,
  selectedSpeakers,
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose} sx={drawerStyle}>
      <AppBar sx={{ backgroundColor: "#F6F8F8" }} position="static">
        <Toolbar>
          <Typography variant="h6" sx={addSpeakerDrawerHeading}>
            Add Speaker
          </Typography>
          <IconButton edge="end" color="default" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TextField
        sx={searchTextField}
        variant="outlined"
        placeholder="Search..."
        size="large"
        onChange={(e) => handleSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img width={20} height={20} src={searchIcon} alt="search-icon" />
            </InputAdornment>
          ),
        }}
      />
      <List sx={listStyle}>
        <SpeakerList
          speakers={speakers}
          handleSelect={handleSelect}
          selectedSpeakers={selectedSpeakers}
        />
      </List>
      <Box sx={addSpeakerBottomContainer}>
        <div style={addSpeakerBottomButtonStyle}>
          <button
            className={
              selectedSpeakers.length > 0 ? "add-button-enable" : "add-button"
            }
          >
            Add
          </button>
          <button className="cancel-button">Cancel</button>
        </div>

        <Typography sx={createSpeakerText}>Create Speaker</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
