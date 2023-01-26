import { string, object } from 'yup';

export const contactFormSchema = object({
  fullName: string().required('Full name is required!'),
  email: string().email('Please enter a valid email!').required('Email address is required!'),
  queryRelated: string().required('Please select a query related option!'),
  text: string().required('Please provide a message text!'),
});
