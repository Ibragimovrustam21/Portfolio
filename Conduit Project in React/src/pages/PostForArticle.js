import React, { useEffect, useState } from 'react'
import { BackgroundError } from '../component/BackgroundError'
export const PostForInput = ({ initialState, onsubmit, error }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [description, setDescription] = useState('')
    const [tagList, setTagList] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const article = {
            title,
            body,
            description,
            tagList
        }
        onsubmit(article)
    }
    useEffect(() => {
        if (!initialState) return
        setTitle(initialState.title)
        setBody(initialState.body)
        setDescription(initialState.description)
        setTagList(initialState.tagList)

    }, [initialState])
    return (
        <div className='row container' >
            <div className='col-6 offset-4' > {
                error && < BackgroundError error={error} />
            }
                <form className='px-5 container' >
                    <div className="mb-3 mt-3" >
                        <input type="text"
                            className="form-control p-2"
                            value={title}
                            placeholder="Article title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 mt-3 position-relative" >
                        <input type="text"
                            className="form-control p-2"
                            value={body}
                            placeholder="What`s this article about"
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 mt-3 position-relative" >
                        <textarea className='form-control'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows='10'
                            placeholder='Write your articlae (in markdown)' >

                        </textarea>
                    </div>
                    <div className="mb-3 mt-3 position-relative" >
                        <input type="text"
                            className="form-control p-2"
                            value={tagList}
                            placeholder="Enter tags"
                            onChange={(e) => setTagList(e.target.value)}
                        />
                    </div>
                    <div className='text-end' >
                        <button className='btn btn-success mt-2'
                            onClick={handleSubmit} >
                            Publish article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}