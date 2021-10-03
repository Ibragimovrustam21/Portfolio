import { useEffect, useState } from 'react';
import { ITitle, obj } from '../interface/Interface';
import { Comment } from '../components/Comment';
import { TodoForm } from '../components/AddPosts';

export const TodoForms: React.FC = () => {
  const [value, setValue] = useState<ITitle[]>([])
  const [change, setChange] = useState<obj>({ title: '', id: 0 })

  useEffect(() => {
    const server = JSON.parse(localStorage.getItem('todo') || "[]")
    setValue(server)
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(value))
  }, [value])

  const onAdd = (title: string) => {
    const newTitle: ITitle = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setValue(prev => [newTitle, ...prev])
  }

  const checkHandler = (id: number) => {
    setValue(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))

  }

  const onRemove = (id: number) => {
    const quest = window.confirm('Вы точно хотите удалить этот пост?')
    if (quest) setValue(prev => prev.filter(item => item.id !== id))

  }

  const onEdit = (title: string, id: number) => {
    setChange({ title: title, id: id })
  }

  const editTitle = (title: string, id: number) => {
    setValue(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title
        }
      }
      return item
    }))
    setChange({ title: '', id: 0 })
  }

  return (
    <>
      <TodoForm onAdd={onAdd} edited={change} editTitle={editTitle} />
      <Comment commentTitle={value} checkHandler={checkHandler} onRemove={onRemove} onEdit={onEdit} />
    </>
  )
}