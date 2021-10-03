import * as yup from 'yup'
import { TextField } from '@mui/material'
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

export const GetStarted = () => {
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
    <div className='get-started'>
      <div className='get-started-card'>
        <h2>
          Create the effect of presence with OLMO
        </h2>
        <h4>
          Feugiat primis ligula risus auctor purus laoreet augue mauris viverra tortor
        </h4>
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <TextField
            className='card-input'
            id="outlined-basic"
            label="Enter Your Name*"
            variant="outlined"
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={
              formik.touched.name && Boolean(formik.errors.name)
            }
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className='card-input'
            id="outlined-basic"
            variant="outlined"
            label="Enter Your Email*"
            type="email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email && formik.errors.email}
          />
          <button
            className='card-btn'
            type="submit"
          >
            Get Started Now
          </button>
        </form>
      </div>
    </div>
  )
}