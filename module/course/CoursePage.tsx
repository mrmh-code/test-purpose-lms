import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {Button, Grid, TextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import CourseAddEditPopup, {courseType} from './CourseAddEditPopup';
import Typography from '@mui/material/Typography';
import CourseDetailsPopup from './CourseDetailsPopup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const PREFIX = 'course-section';

const classes = {};
const CourseSectionHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const CoursePage = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
  const [selectCourseType, setSelectCourseType] = useState<string>('');
  const [courseTitleSearch, setCourseTitleSearch] = useState<string>('');
  const [mutation, setMutation] = useState(0);
  const [courseData, setCourseData]: any = useState([]);
  const closeAddEditModal = () => {
    setIsOpenAddEditModal(false);
    setSelectedItemId(null);
  };

  const openAddEditModal = (itemId: number | null = null) => {
    setIsOpenDetailsModal(false);
    setIsOpenAddEditModal(true);
    setSelectedItemId(itemId);

    console.log('openAddEditModal', itemId);
  };

  const openDetailsModal = (selectedItemId: number) => {
    setIsOpenDetailsModal(true);
    setSelectedItemId(selectedItemId);
  };

  const closeDetailsModal = () => {
    setIsOpenDetailsModal(false);
  };

  const refreshDataTable = () => {
    setMutation(mutation + 1);
  };

  useEffect(() => {
    let storedData: any = localStorage.getItem('courseData');
    storedData = JSON.parse(storedData);
    let filterData = storedData;
    if (storedData) {
      if (selectCourseType) {
        filterData = filterData.filter(
          (item: any) => item.course_type == selectCourseType,
        );
      }

      if (courseTitleSearch.trim()) {
        console.log('courseTitleSearch', courseTitleSearch);
        filterData = filterData.filter((item): any => {
          return item.title
            .trim()
            ?.toLowerCase()
            .includes(courseTitleSearch.toLowerCase());
        });
      }

      setCourseData(filterData);
    }
  }, [mutation, selectCourseType, courseTitleSearch]);

  const handleDelete = (itemId: number) => {
    const storedData = localStorage.getItem('courseData');
    if (storedData) {
      const parseData = JSON.parse(storedData);
      const updateData = parseData.filter((i) => i.id !== itemId);
      localStorage.setItem('courseData', JSON.stringify(updateData));
    }
    refreshDataTable();
  };

  return (
    <Box sx={{width: '100%', overflowX: 'auto'}}>
      <CourseSectionHeader>
        <Box className={'left-section'} sx={{display: 'flex'}}>
          <TextField
            label={'Title'}
            sx={{width: '300px', m: 1}}
            onChange={(e) => {
              setCourseTitleSearch(e.target.value);
            }}
          />

          <FormControl fullWidth sx={{minWidth: '250px', m: 1}}>
            <InputLabel id='course-type-label'>Course Type</InputLabel>

            <Select
              labelId='course-type-label'
              id='course-type'
              value={selectCourseType}
              label='Course Type'
              onChange={(e) => setSelectCourseType(e.target.value)}>
              {courseType.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box className={'right-section'}>
          <Button
            m={1}
            onClick={() => openAddEditModal(null)}
            variant='contained'>
            Add Course
          </Button>
        </Box>
      </CourseSectionHeader>

      <Box className={'data-table'} mt={4}>
        <Grid container spacing={2}>
          {courseData?.map((course, index): any => (
            <Grid
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

              <Typography variant='body1' sx={{color: 'red'}}>
                Type: {course.course_type}
              </Typography>
              <Typography variant={'body2'} sx={{}}>
                {' '}
                Description :{course.description}
              </Typography>
              <Button onClick={() => openAddEditModal(course.id)}>Edit</Button>
              <Button onClick={() => handleDelete(course.id)}>delete</Button>
              <Button onClick={() => openDetailsModal(course.id)}>view</Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {isOpenAddEditModal && (
        <CourseAddEditPopup
          closeModal={closeAddEditModal}
          refreshDataTable={refreshDataTable}
          itemId={selectedItemId}
        />
      )}

      {isOpenDetailsModal && (
        <CourseDetailsPopup
          closeModal={closeDetailsModal}
          itemId={selectedItemId}
        />
      )}
    </Box>
  );
};

export default CoursePage;
