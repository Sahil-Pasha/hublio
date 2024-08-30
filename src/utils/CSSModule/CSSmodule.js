import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export const drawerStyle = (theme) => ({
  '& .MuiDrawer-paper': {
    width: '35%',
    height: '100vh',
    overflowY: 'unset',
    [theme.breakpoints.down('lg')]: {
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },
})

export const addSpeakerDrawerHeading = {
  flexGrow: 1,
  color: '#202020',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '27px',
}

export const searchTextField = {
  '& .MuiInputBase-root': {
    border: '1px solid #E9E9E9',
    borderRadius: '12px',
    height: '40px',
  },
  margin: '10px',
}
export const listStyle = {
  overflowY: 'auto',
  flexGrow: 1,
  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
}

export const addSpeakerBottomContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  alignItems: 'center',
  border: '1px solid #DBDBDB',
  height: '100px',
}
export const addSpeakerBottomButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: '20px',
}
export const createSpeakerText = {
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '21px',
  color: '#E4875D',
}
