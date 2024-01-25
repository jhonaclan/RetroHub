import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function HeadlinePost() {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5">Headline post</Typography>
    </Paper>
  );
}

const postExample = {
  date: 'Oct 30, 2023',
  description: 'This is a sample description.',
  image: '/path_to_your_image.jpg',
  imageLabel: 'Alt text for the image',
  title: 'Sample Post Title',
};

export default HeadlinePost;