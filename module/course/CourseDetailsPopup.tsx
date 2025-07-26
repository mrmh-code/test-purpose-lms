import React from 'react';
import PopupModal from '../../common/utility /modal/PopupModal';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CourseDetailsPopup = ({closeModal, itemId}) => {
  const storedData = JSON.parse(localStorage.getItem('courseData') || '[]');
  const course = storedData.find((item: any) => item.id == itemId);

  return (
    <PopupModal label={'course'} open={true} close={closeModal}>
      <Box
        item
        md={3}
        sx={{
          background: '#c3ded9',
          p: 2,
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
        }}>
        <Typography variant='h6' component='div'>
          Title: {course.title}
        </Typography>

        <Typography variant='span' sx={{color: 'red'}}>
          Type: {course.course_type}
        </Typography>
        <Typography> description :{course.description}</Typography>
      </Box>
    </PopupModal>
  );
};

export default CourseDetailsPopup;
