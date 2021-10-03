import React from 'react'
import { SpeciesItem } from './SpeciesItem'

export const SpeciesGroup = ({ title = ['Market Research', 'Web Development', 'Brand Design Identity', 'User Experiencs', 'Digital Marketing', 'SEO & SMM Services'] }) => {
  return (
    <>
      <div className='species'>
        <div>
          <h1>
            We have everything you need to convert your ideas into reality
          </h1>
          <p>
            Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus,
            blandit and cursus varius and magnis sapien
          </p>
        </div>
      </div>
      <div className='species-group'>
        <div className='species-container'>
          <div className='species-child'>
            <SpeciesItem
              icon={'fas fa-chart-line'}
              title={title[0]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-bezier-curve'}
              title={title[1]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-trophy'}
              title={title[2]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
          </div>
          <div className='species-child'>
            <SpeciesItem
              icon={'far fa-lightbulb'}
              title={title[3]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-chart-pie'}
              title={title[4]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
            <SpeciesItem
              icon={'fas fa-globe'}
              title={title[5]}
              text={'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor'}
            />
          </div>
        </div>
      </div>

    </>
  );
};
