export interface ITitle {
  title: string
  id: number
  completed?: boolean
}
export type obj = {
  title: string
  id: number
}
export interface ITodoProps {
  onAdd(title: string): void
  edited: obj
  editTitle(title: string, id: number): void
}
export type todo = {
  commentTitle: ITitle[]
  checkHandler(id: number): void
  onRemove(id: number): void
  onEdit(text: string, id: number): void
}
