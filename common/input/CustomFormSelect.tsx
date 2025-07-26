import React from 'react';

import {Controller} from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  id: string;
  label?: string;
  defaultValue?: string;
  control: any;
  placeholder?: string;
  sx?: any;

  options: any;
  onChangeCallBack:any
}
const CustomFormSelect = ({
  id,
  label,
  defaultValue,
  control,
  placeholder,
  sx,
  options,
  onChangeCallBack,
}: Props) => {


  return (


    <FormControl sx={{width:"300px"}}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="month"
        id="month"
        value={month}
        label="month"
        onChange={onChangeCallBack()}
      >
        {
          options.map((item, index) => (
            <MenuItem key={index} value={item.id}>{item.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
      )}
    />
  );


};

export default CustomFormSelect;
