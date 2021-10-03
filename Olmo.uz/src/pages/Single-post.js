import React from 'react'
import * as yup from 'yup'
import '../css/single-post.css'
import { FormControl, TextareaAutosize, TextField } from '@mui/material';
import { useFormik } from 'formik'
import { anime } from '../components/Navbar';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
})

export const SinglePost = () => {
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
    <div className='single-post'>
      <div className='single-post-container'>
        <div className='single-post-title'>
          <h4>OLMO NEWS</h4>
          <h2>Augue OLMO, luctus neque purus and ipsum neque libero</h2>
          <div className='post-user'>
            <div className='post-user-img centerFDC'>
              <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-6.jpg' alt='' />
            </div>
            <div className='post-user-title centerFDC'>
              <h4>Matthew Anderson</h4>
              <p>Posted on June 22, 2021 - 4 comments</p>
            </div>
          </div>
          <p>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec and ipsum aporta justo integer at odio velna. Maecenas gravida porttitor nunc vehicula magna luctus tempor. Quisque vel laoreet turpis. An augue viverra a augue eget, dictum tempor pulvinar donec ociis et magnis sapien imperdiet dui varius placerat
            imperdiet ipsum varius viverra augue egestas luctus donec purus and blandit impedit ligula risus. Mauris donec</p>
        </div>
        <div className='focus-on-technologies'>
          <img src='https://dsathemes.com/html/olmo_1.3/files/images/blog/inner-img-1.png' alt='' />
          <div className='focus-on-technologies-title'>
            <h2>We focus on technologies that, along with a build-measure-lean process, allow us to deliver high performing, less error prone and intelligible code</h2>
            <p>
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor massa congue magna nihil impedit ligula risus. Mauris donec ociis and magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer undo odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu tempor gravida porttitor cursus fusce ugue egestas cursus magna nihil impedit
              <br />
              <br />
              1. Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis magnis sapien etiam and sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna
              <br />
              <br />
              2. Placerat imperdiet dui varius consectetur nibh, vel imperdiet dui varius viverra donec
              <br />
              <br />
              3. Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec et magnis sapien etiam sapien rutrum tempor mullam blandit tempor sapien and gravida
            </p>
            <h2>Praesent aliquet tempus<br /> (tempor gravida ipsum as an example)</h2>
            <p>
              Magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus libero. Mauris donec ociis a neque.
              Phasellus blandit tristique justo and aliquam vitae molestie nunc sapien justo, aliquet non molestie augue
            </p>
            <ul>
              <li>
                Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius
              </li>
              <li>
                Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
              </li>
            </ul>
            <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus libero. Mauris donec ociis a neque. Phasellus blandit tristique justo and aliquam vitae molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus aliquam eget lacinia elit tincidunt</p>
          </div>
        </div>
        <div className='single-post-img'>
          <div>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-6-img.jpg' alt='' />
            <p>Maecenas gravida CPU porttitor magna</p>
          </div>
          <div>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-5-img.jpg' alt='' />
            <p>Gravida porttitor nunc, quis vehicula tempor</p>
          </div>
        </div>
        <div className='single-post-lorem'>
          <p>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus and netus laoreet malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet
            turpis urna augue, viverra a augue eget, dictum dictum tempor diam pulvinar consectetur</p>
          <div>
            <p>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus and netus laoreet malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam pulvinar consectetur</p>
          </div>
          <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus vulputate ligula molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis purus massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate purus.
            Aliqum mullam a blandit tempor posuere ligula varius congue cursus congue magna impedit ligula</p>
          <ul>
            <li>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius</li>
            <li>Fringilla risus nec, luctus mauris orci auctor euismod purus pretium at purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo</li>
          </ul>
          <h2>Egestas volutpat egestas</h2>
          <p>
            In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus aliqum mullam blandit
            Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet a turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar nibh, vel imperdiet congue varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec
          </p>
          <div className='single-post-lorem-img'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/img-19.png' alt='' />
          </div>
          <h2>Vitae massa placerat vulputate</h2>
          <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus vulputate ligula molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis purus massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate purus. Aliqum mullam a blandit tempor posuere ligula varius congue cursus congue magna impedit ligula</p>
          <br /><br />
          <p>
            <strong>Aliqum mullam blandit tempor sapien gravida donec ipsum </strong>, at porta justo. Velna vitae and auctor congue magna impedit ligula risus. Mauris donec ociis magnis sapien etiam sapien sagittis congue posuere ligula varius congue cursus tempor gravida donec integer
          </p>
          <h2>Cursus non nulla vitae massa</h2>
          <ul>
            <li>Donec dolor magna, suscipit and magna dignissim, porttitor hendrerit diam. Gravida ultrices turpis and faucibus aliquet undo tempus, blandit posuere ligula varius congue cursus nulla vitae massa</li>
            <li>Aliquam varius neque commodo purus tempor sapien gravida vulputate pharetra bibendum</li>
            <li>Morbi lectus, lobortis felis nec, suscipit imperdiet sapien semper ultrices. Nulla tincidunt at volutpat and tincidunt. Habitant morbi tristique senectus et netus malesuada famesa augue suscipit, luctus neque purus ipsum bibendum quis, aliquet elementum</li>
          </ul>
          <p>Curabitur ac dapibus libero quisque eu tristique neque sellus blandit tristique justo aliquam. Aliquam vitae at molestie nunc sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam lacinia at tincidunt massa justo. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh imperdiet varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt tincidunt massa porttitor</p>
        </div>
        <div className='single-post-tags'>
          <div className='single-post-tag-name centerFDR'>
            <div className='centerFDC'><h3>Life</h3></div>
            <div className='centerFDC'><h3>Ideas</h3></div>
            <div className='centerFDC'><h3>Story</h3></div>
            <div className='centerFDC'><h3>Web Design</h3></div>
          </div>
          <div className='single-post-tags-icon centerFDR'>
            <span className='fab fa-twitter' />
            <span className='fab fa-facebook-square' />
            <span className='fas fa-bookmark' />
          </div>
        </div>
      </div>
      <div className='published-by'>
        <div className='published-by-container'>
          <div className='published-img centerFDR'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-7.jpg' alt='' />
          </div>
          <div className='published-title centerFDC'>
            <div className='published-title-header'>
              <div>
                <p>PUBLISHED BY</p>
                <h2>Matthew Anderson</h2>
              </div>
              <div>
                <button className='btn-outline'>Follow</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor sapien dolore incidide ut labore dolore incididunt ut labore turpis vitae raesent varius consectetur purus efficitur ipsum primis in cubilia laoreet augue donec</p>
            <br />
            <p>All stories by Matthew Anderson</p>
          </div>
        </div>
      </div>
      <h1 className='comments-number'>4 Comments</h1>
      <div className='published-comments'>
        <div className='published-by-container'>
          <div className='published-img centerFDR'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-2.jpg' alt='' />
          </div>
          <div className='published-title centerFDC'>
            <div className='published-title-header'>
              <div>
                <h2>Jamie</h2>
                <p>5 days ago - <span onClick={() => anime('reply')} className='fas fa-reply' > Reply</span></p>
              </div>
            </div>
            <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque undo viverra suscipit egestas magna porta ratione, mollis risus lectus porta rutrum aenean primis in augue luctus neque purus ipsum neque dolor primis purus efficitur an ipsum primis in cubilia laoreet augue</p>
          </div>
        </div>

      </div>
      <div className='published-comments '>
        <div className='published-by-container reply'>
          <div className='hr-reply '></div>
          <div className='published-img centerFDR'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-6.jpg' alt='' />
          </div>
          <div className='published-title centerFDC'>
            <div className='published-title-header'>
              <div>
                <h2>Matthew Clark</h2>
                <p>6 days ago - <span onClick={() => anime('reply')} className='fas fa-reply' > Reply</span></p>
              </div>
            </div>
            <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque undo viverra suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu</p>
          </div>
        </div>
      </div>
      <div className='published-comments'>
        <div className='published-by-container'>
          <div className='hr-l'></div>

          <div className='published-img centerFDR'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-8.jpg' alt='' />
          </div>
          <div className='published-title centerFDC'>
            <div className='published-title-header'>
              <div>
                <h2>Olivia Steiner</h2>
                <p>13 days ago - <span onClick={() => anime('reply')} className='fas fa-reply' > Reply</span></p>
              </div>
            </div>
            <p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus and neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius an impedit enim tempor vitae pulvinar at congue augue egestas praesent aliquet</p>
          </div>
        </div>

      </div>
      <div className='published-comments '>
        <div className='published-by-container '>
          <div className='hr-l'></div>
          <div className='published-img centerFDR'>
            <img src='https://dsathemes.com/html/olmo_1.3/files/images/review-author-3.jpg' alt='' />
          </div>
          <div className='published-title centerFDC'>
            <div className='published-title-header'>
              <div>
                <h2>C. Johnson</h2>
                <p>42 days ago - <span onClick={() => anime('reply')} className='fas fa-reply' > Reply</span></p>
              </div>
            </div>
            <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque undo viverra suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu</p>
          </div>
        </div>
      </div>
      <div className='published-form centerFDC'>
        <div className='single-post-container'>
          <div className='published-form-title'>
            <h2>Leave a Comment</h2>
            <p>Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className='published-form-group'>
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
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
                <h3>Add Comment*</h3>
                <p>Please carefully check your email address for accuracy</p>

                <FormControl fullWidth>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    placeholder="Enter Your Comment Here*"

                  />
                </FormControl>
              </div>
              <button
                className='btn'
                type="submit"
                style={{ marginTop: '20px' }}
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='hr'></div>
    </div>
  );
};

