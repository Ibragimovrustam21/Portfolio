import React from 'react'
import '../css/contact-us.css'
import { FormControl, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
})
export const ContactForms = () => {
  const [age, setAge] = React.useState('This question is about...');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <h3>This question is about:</h3>
          <p>Choose a topic, so we know who to send your request to:</p>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>This question is about...</MenuItem>
              <MenuItem value={20}>Registering/Authorising</MenuItem>
              <MenuItem value={30}>Using Application</MenuItem>
              <MenuItem value={40}>Troubleshooting</MenuItem>
              <MenuItem value={50}>Backup/Restore</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='form-group'>
          <h3>Your Name:</h3>
          <p>Please enter your real name:</p>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Name*"
              variant="outlined"
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
        </div>
        <div className='form-group'>
          <h3>Your Email:</h3>
          <p>Please carefully check your email address for accuracy</p>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Email Address*"
              variant="outlined"
              type="email"
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                formik.touched.email && Boolean(formik.errors.email)
              }
              helperText={formik.touched.email && formik.errors.email}
            />
          </FormControl>
        </div>
        <div className='form-group'>
          <h3>Explain your question in details:</h3>
          <p>Your OS version, OLMO version & build, steps you did. Be VERY precise!</p>
          <FormControl fullWidth>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="I hava a problem with..."
              // style={{ width: aut }}
            />
          </FormControl>
        </div>
        <button
          className='btn'
          type="submit"
          style={{ marginTop: '20px' }}
        >
          Submit Request
        </button>
      </form>
    </>
  )
}