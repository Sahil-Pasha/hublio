import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  ListItemAvatar,
  Checkbox,
  Avatar,
  Box,
} from "@mui/material";
import line from "../utils/images/vertical-line.svg";
import editicon from "../utils/images/edit-icon.svg";

const SpeakerItem = ({ speaker, handleSelect, isSelected }) => {
  const handleToggle = () => {
    handleSelect(speaker.id);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
        }}
      >
        <ListItem
          sx={{
            border: isSelected ? "1px solid #4CBB3E" : "1px solid #E9E9E9",
            borderRadius: "12px",
          }}
          secondaryAction={
            <Checkbox
              edge="end"
              sx={{
                color: "#636363",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
              onChange={handleToggle}
              checked={isSelected}
            />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemAvatar
              sx={{
                "& .MuiAvatar-root": {
                  width: "55px",
                  height: "55px",
                  mr: "10px",
                },
              }}
            >
              <Avatar alt={speaker.usericon} src="spearker-icon" />
            </ListItemAvatar>
            <ListItemText
              primary={speaker.name}
              primaryTypographyProps={{
                sx: {
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#373F66",
                },
              }}
              secondary={
                <>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#717693",
                      mr: 1.5,
                    }}
                  >
                    {speaker.designation}
                  </Typography>
                  <Typography component="span">
                    <img src={line} alt="vertical-Line" />
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#717693",
                      ml: 1.5,
                    }}
                  >
                    {speaker.organization}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "#E4875D",
                      }}
                    >
                      <img
                        width={18}
                        height={18}
                        src={editicon}
                        alt="edit-icon"
                      />
                      Edit Speaker
                    </Typography>
                  </Box>
                </>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default SpeakerItem;
