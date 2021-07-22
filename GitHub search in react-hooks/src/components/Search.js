import React, { useContext, useState } from 'react'
import { AlertContext } from '../alert/context/AlertContext'
import { gitHubContext } from '../alert/gitHub/gitHubContext'
export const Search = () => {
    const { show,hide } = useContext(AlertContext)
    const [value, setValue] = useState('') // '' => boshlang`ich value ni qiymati 
    const github = useContext(gitHubContext)
    const submit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        github.claerUsers()
        if (value.trim()) {
            hide()
            github.search(value.trim())
        } else {
            show('Введите имя пользователя!')
        }
    }
    return (
        <div>
            <input
                type='text'
                className='form-control mt-2'
                placeholder='Введите имя пользователя!'
                onKeyPress={submit}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}