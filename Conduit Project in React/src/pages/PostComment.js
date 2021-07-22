import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../component/useFetch'
const CommentItem = ({ responseGet, state, deleteComment }) => {

    return (
        <>
            {
                responseGet && state && responseGet.comments.map((item, key) => {
                    
                    return (

                        <div key={key} style={{ borderRadius: '5px', border: '1px solid #eee' }} className='mt-2'>
                            <div className='card-block '>
                                <p className='card-text text-start'> {item.body}</p>
                            </div>
                            <div className='card-footer border-0 text-start d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={state.currentUser.image} alt='' width='30px' />
                                    <Link to={`/profile/${state.currentUser.username}`} className='text-success text-decoration-none'>
                                        &nbsp;{state.currentUser.username}
                                    </Link>
                                &nbsp;<p className='m-0'>{state.currentUser.createdAt}</p>
                                </div>

                                <div className='w-25 text-end' style={{ cursor: 'pointer' }} onClick={()=>{deleteComment(item.id)}} >
                                    <i className='fas fa-trash-alt'></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export const PostComment = ({ apiUrl, state }) => {
    const [body, setBody] = useState('')
    const getUrl = `${apiUrl}/comments`
    const [{ response: ResponseGet }, doFetchGet] = useFetch(getUrl)
    const [{ response: ResponsePost }, doFetchPost] = useFetch(getUrl)
    const [id,setId]= useState('')
    const [{response:ResponseDelete}, doFetchDelete] = useFetch(getUrl+`/${id}`)
    const DeleteComment = (id) => {
        setId(id)
        doFetchDelete({
            method:'delete'
        })
    }

    useEffect(() => {
        doFetchGet()
        setBody('')
    }, [doFetchGet, ResponsePost,ResponseDelete])

    const PostComment = (event) => {
        event.preventDefault()
        doFetchPost({
            method: 'post',
            data: {
                body
            }
        })
    }



    useEffect(() => {
        if (!ResponsePost) return
    }, [ResponsePost])

    return (
        <div className="mb-3 mt-3 position-relative">
            <textarea className='form-control' value={body} onChange={(e) => setBody(e.target.value)} rows='5' cols='5' placeholder='Write a comment...'>

            </textarea>
            <div className='card-footer text-end'>
                <button className='btn btn-sm-2 btn-success' onClick={PostComment} >
                    Post comment
                </button>
            </div>
            <CommentItem responseGet={ResponseGet} state={state} deleteComment={DeleteComment} />
        </div>
    )
}