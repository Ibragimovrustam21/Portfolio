import { useEffect, useState } from "react"
import { ITodoProps } from "../interface/Interface"

export const TodoForm: React.FC<ITodoProps> = props => {
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (props.edited.title !== '') {
      document.getElementById('label')?.classList.add('active')
      setTitle(props.edited.title)
    }
  }, [props.edited])

  const keyPress = (event: React.KeyboardEvent) => {
    if (title === '' && event.key === "Enter") {
      return alert('Поле не может быть пустым')
    }
    if (event.key === "Enter") {
      { props.edited.id !== 0 ? props.editTitle(title, props.edited.id) : props.onAdd(title) }
      setTitle('')
    }
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="email"
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          className="validate"
          onKeyPress={keyPress}
        />
        <label htmlFor="email" id='label'>Оставить пост</label>
      </div>
    </div>
  )
}