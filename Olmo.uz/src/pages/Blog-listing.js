import '../css/blog-listing.css'
import { TextField } from '@mui/material'
import PaginationLink from '../components/Pagination'

export const BlogListing = () => (
  <div className='blog-listing'>
    <div className='blog-listing-container centerFDC'>
      <div className='blog-listing-title'>
        <h1>Relevant news and more for you. Welcome to our blog</h1>
      </div>
      <div className='olmo-news'>
        <div className='olmo-news-img centerFDC'>
          <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/featured-post.jpg' />
        </div>
        <div className='olmo-news-card'>
          <div className='blog-listing-star centerFDC'>
            <span className='fas fa-star'></span>
          </div>
          <p>OLMO News  |  May 18, 2021</p>
          <h1>Tempor sapien donec gravida a suscipit and porta justo vitae</h1>
          <p>Aliqum mullam blandit vitae tempor sapien and donec lipsum gravida and porta undo velna dolor in cubilia...</p>
          <p>38 Comments</p>
        </div>
      </div>
      <div className='latest-articles'>
        <h1>Latest Articles</h1>
      </div>
      <div className='hr'></div>
      <div className='bl-card-category centerFDC'>
        <div className='bl-card-category-container'>
          <div className='bl-card-item'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-1-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>OLMO News  |  JuLy 31, 2021</p>
              <h3>A ligula risus auctor and tempus sapien an augue integer turpis</h3>
              <p>9 Comments</p>
            </div>
          </div>
          <div className='bl-card-item bl-card-item-height'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-5-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>OLMO News  |  JuLy 31, 2021</p>
              <h3>Integer urna turpis donec ipsum a porta justo risus auctor mauris augue</h3>
              <p>27 Comments</p>
            </div>
          </div>
          <div className='bl-card-item'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-2-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>OLMO News  |  JuLy 31, 2021</p>
              <h3>Donec sapien an augue integer turpis at cursus porta urna mauris</h3>
              <p>21 Comments</p>
            </div>
          </div>
          <div className='bl-card-item bl-card-item-height'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-6-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>OLMO News  |  June 30, 2021</p>
              <h3>Mauris donec magnis and sapien ociis etiam sapien congue undo augue</h3>
              <p>32 Comments</p>
            </div>
          </div>
          <div className='bl-card-item'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-4-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>OLMO News  |  JuLy 31, 2021</p>
              <h3>Laoreet undo magna at suscipit undo egestas magna ipsum ligula</h3>
              <p>27 Comments</p>
            </div>
          </div>
          <div className='bl-card-item bl-card-item-height'>
            <div className='bl-card-item-child centerFDC'>
              <img alt='' src='https://dsathemes.com/html/olmo_1.3/files/images/blog/post-7-img.jpg' />
            </div>
            <div className='bl-card-item-child-2'>
              <p>Inspiration  |  June 18, 2021</p>
              <h3>An augue cubilia laoreet undo magna and suscipit egestas volutpat</h3>
              <p>42 Comments</p>
            </div>
          </div>
        </div>
        <div className='bl-pagination centerFDC'>
          <PaginationLink />
        </div>
      </div>

      <div className='blog-listing-olmo-free centerFDC'>
        <div className='olmo-free'>
          <div className='olmo-free-title centerFDR'><h2>Stay up to date with our news, ideas and updates</h2></div>
          <div className='olmo-free-btn centerFDR'>
            <TextField id="outlined-basic" label="Your Email Address" variant="outlined" />
            <button className='btn'>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)