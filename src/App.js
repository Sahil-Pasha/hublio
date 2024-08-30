import React, { useState } from 'react'
import './App.css'
import { Button, Typography } from '@mui/material'
import Sidebar from './components/Sidebar'
import { speakersData } from './constants/data'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [speakers, setSpeakers] = useState(speakersData)
  const [selectedSpeakers, setSelectedSpeakers] = useState([])

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleSearch = (query) => {
    if (!query) {
      setSpeakers(speakersData)
    } else {
      const uppercasedQuery = query.toLocaleUpperCase()
      const searchedItems = speakersData.filter((items) =>
        items.name.toLocaleUpperCase().includes(uppercasedQuery),
      )
      setSpeakers(searchedItems)
    }
  }

  const handleSelect = (id) => {
    setSelectedSpeakers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((sid) => sid !== id)
        : [...prevSelected, id],
    )
  }

  return (
    <React.Fragment>
      <div className="main-container">
        <Typography className="add-speaker-text">Add speaker</Typography>
        <Button
          sx={{
            border: '1px solid #E4875D',
            borderRadius: '10px',
            backgroundColor: '#E4875D',
            color: '#FFFFFF',
            textTransform: 'none',
            Padding: '0px, 8px, 0px, 8px',
          }}
          variant="contained"
          size="large"
          onClick={handleSidebarToggle}
        >
          Add Speaker
        </Button>
      </div>
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          handleClose={handleSidebarToggle}
          speakers={speakers}
          handleSearch={handleSearch}
          handleSelect={handleSelect}
          selectedSpeakers={selectedSpeakers}
        />
      </div>
    </React.Fragment>
  )
}

export default App
