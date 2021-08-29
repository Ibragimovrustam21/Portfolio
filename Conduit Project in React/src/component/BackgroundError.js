import React from 'react'
export const BackgroundError = ({ error }) => {
    const errorItem = Object.keys(error).map(err => {
        return `${err} : ${error[err].join(' ')}`
    })
    return (
        <ul className='list-unstyled ms-5 mt-2'>
            {
                errorItem.map((item, key) => {
                    return <li className='text-danger' key={key}>
                        {item}
                    </li>
                })
            }
        </ul>
    )
}