import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { HomePage, Chat } from './pages'
import appStyle from './appStyle'

const App = () => {
  return (
    <Box sx={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App