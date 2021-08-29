import { todo } from "../interface/Interface"

export const Comment: React.FC<todo> = ({ commentTitle, checkHandler, onRemove, onEdit }) => {
  if (commentTitle.length === 0) {
    return <h5 style={{ textAlign: 'center' }}>Нет посты</h5>
  }

  return (
    <div className="row">
      {commentTitle.map(item => {
        const classes = ['']
        if (item.completed) {
          classes.push('lineThrough')
        }
        return (
          <div className="col s12" key={item.id}>
            <div className="card  blue lighten-5">
              <div className="card-content white-text">
                <label>
                  <input type="checkbox" onChange={() => checkHandler(item.id)} />
                  <span className={classes.join(' ')}>{item.title}</span>
                </label>
                <div>
                  <i className='material-icons purple-text' onClick={() => onEdit(item.title, item.id)}>edit</i>
                  <i className='material-icons red-text' onClick={() => onRemove(item.id)}>delete</i>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}