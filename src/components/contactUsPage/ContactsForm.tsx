import { FC } from 'react';
import {
  Box, Container, Select, MenuItem, TextareaAutosize, Button,
} from '@mui/material';
import Swal from 'sweetalert2';
import {
  useForm, SubmitHandler, FieldValue, Controller,
} from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputField } from './InputField';
import { contactFormSchema } from '../../utils/validation/ContactFormVaidation';

export const ContractsForm: FC = () => {
  const { mutate } = useMutation({
    mutationFn: (data: typeof contactFormSchema) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data));
      }, 500);
    }),
    onSuccess: () => {
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Logged in successfully!!',
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      queryRelated: '',
      message: '',
    },
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FieldValue<any>> = (data: typeof contactFormSchema) => mutate(data);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2rem',
        p: {
          xs: '0 1rem', sm: '0 2rem', md: '0 3rem', lg: 0, xl: 0,
        },
      }}
    >
      <Box
        component="section"
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '50rem', lg: '60rem', xl: '60rem',
          },
          height: '90%',
          display: 'flex',
          justifyContent: {
            xs: 'center', sm: 'center', md: 'center', lg: 'space-between', xl: 'space-between',
          },
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          p: '3rem 4rem',
        }}
      >
        <Container
          maxWidth={false}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <InputField
            control={control}
            inputName="fullName"
            type="text"
            placeholder="Please enter your full name ..."
            label="Full Name"
          />
          <InputField
            control={control}
            inputName="email"
            type="email"
            placeholder="Please enter your email..."
            label="Email"
          />
          <Controller
            name="queryRelated"
            control={control}
            render={({
              field: {
                onChange, onBlur, name, value,
              },
            }) => (
              <Select
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                value={value || 'query1'}
                label="Query Selection"
                placeholder="Please select a query ..."
              >
                <MenuItem value="query1">First Query</MenuItem>
                <MenuItem value="query2">Second Query</MenuItem>
                <MenuItem value="query3">Third Query</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({
              field: {
                onChange, onBlur, name, value,
              },
            }) => (
              <TextareaAutosize
                maxRows={20}
                aria-label="message text box"
                placeholder="Please enter you message text ..."
                defaultValue=""
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                value={value}
                style={{
                  padding: '2rem',
                  width: '100%',
                  height: '10rem',
                  backgroundColor: '#fff',
                  border: '1px solid rgb(109 110 118 / 45%)',
                  outline: 'none',
                  borderRadius: '0.3rem',
                }}
              />
            )}
          />
          <Button type="submit" variant="contained" fullWidth>Send Message</Button>
        </Container>
      </Box>
    </Box>
  );
};
