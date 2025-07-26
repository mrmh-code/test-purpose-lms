import React from 'react';
import {TextField} from '@mui/material';
import {Controller} from 'react-hook-form';
import FormControl from '@mui/material/FormControl';

interface Props {
  required?: boolean;
  id: string;
  label?: string;
  defaultValue?: string;
  control: any;
  placeholder?: string;
  sx?: any;
  type?: any;
  multiline?: boolean;
}
const TextInputField = ({
  required,
  id,
  label,
  defaultValue,
  control,
  placeholder,
  sx,
  type,
  multiline,
}: Props) => {
  return (
    <FormControl fullWidth={true}>
      <Controller
        control={control}
        name={id}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <TextField
            required={required}
            label={label}
            multiline={multiline}
            defaultValue={defaultValue}
            placeholder={placeholder || 'name........'}
            onChange={onChange}
            value={value}
            sx={{...sx, padding: '10.5px 14px'}}
            type={type}
          />
        )}
      />
    </FormControl>
  );
};

export default TextInputField;
