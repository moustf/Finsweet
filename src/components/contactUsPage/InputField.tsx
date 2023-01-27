import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField } from '@mui/material';

export const InputField: FC<{
  control: Control<any>,
  inputName: string,
  label: string,
  type: string,
  placeholder: string,
}> = ({
  control, inputName, label, type, placeholder,
}) => (
  <Controller
    name={inputName}
    control={control}
    render={({
      field: {
        onChange, onBlur, name, value,
      },
    }) => (
      <TextField
        margin="normal"
        required
        fullWidth
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    )}
  />
);
