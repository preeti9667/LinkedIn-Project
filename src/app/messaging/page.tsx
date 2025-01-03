import React from 'react'
import Layout from '../feed/Layout'
import { Box, Typography } from '@mui/material'
export default function page() {
  return (
    <div>
      <Layout>
        <Box sx={{ height: '100vh' }}>
          <Typography>Messaging</Typography></Box>
      </Layout>
    </div>
  )
}
