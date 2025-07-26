import React, {useEffect, useState} from 'react';
import PopupModal from '../../common/utility /modal/PopupModal';

import {Controller, useForm} from 'react-hook-form';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import TextInputField from '../../common/input/TextInputField';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

export const courseType = ['Programming', 'DB', 'OOP', 'System Design'];
const CourseAddEditPopup = ({closeModal, refreshDataTable, itemId}: any) => {
  const {handleSubmit, control, register, reset}: any = useForm({});

  const onSubmit = (data: any) => {
    const storedData = JSON.parse(localStorage.getItem('courseData') || '[]');
    let updateData;

    if (itemId) {
      updateData = storedData.map((item: any) => {
        return item.id == itemId ? {...data} : item;
      });
    } else {
      const newId = storedData.length ? storedData.length + 1 : 1;

      updateData = [...storedData, {...data, id: newId}];
    }

    localStorage.setItem('courseData', JSON.stringify(updateData));
    refreshDataTable();
    closeModal();
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('courseData') || '[]');
    if (itemId && storedData?.length) {
      const itemData = storedData.find((item: any) => item.id == itemId);
      console.log('itemData', itemData);
      reset(itemData);
    }
  }, [reset, itemId]);

  return (
    <PopupModal label={'course'} open={true} close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid spacing={2} container>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <TextInputField
              id={'title'}
              control={control}
              placeholder={'Title'}
            />
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <FormControl fullWidth sx={{minWidth: '250px', mt: 1}}>
              <InputLabel id='course-type-label'>Course Type</InputLabel>

              <Controller
                control={control}
                name='course_type'
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <Select
                    labelId='course-type-label'
                    id='course-type'
                    value={value}
                    label='Course Type'
                    onChange={(e) => {
                      onChange(e);
                    }}>
                    {courseType.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <TextInputField
              id={'description'}
              control={control}
              placeholder={'Description'}
              multiline={true}
            />
          </Grid>
        </Grid>

        <Box sx={{textAlign: 'end', marginRight: '5px', mt: 1, mb: 2}}>
          <Button type={'submit'} variant={'contained'}>
            Submit
          </Button>
        </Box>
      </form>
    </PopupModal>
  );
};

export default CourseAddEditPopup;
