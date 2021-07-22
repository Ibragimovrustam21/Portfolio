import React from 'react';
export const Repos = ({ repos }) => {
    return (
        <>
            {
                repos.map((repo) => {
                   return  <div className='card my-4' key={repo.id}>
                        <div className='card-body'>
                            <h5 style={{margin:'0px'}}><a href={repo.html_url}style={{textDecoration:'none'}} target='_blank' >{repo.name}</a></h5>
                        </div>
                    </div>
                })
            }

        </>
    )
}