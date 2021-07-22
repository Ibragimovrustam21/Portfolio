import { parse } from "query-string"

export const limit = 10
export const getPaginator = (props) => {
    const ParseSearch = parse(props.search)
    const currentPage = ParseSearch.page ? Number(ParseSearch.page) : 1
    const offset = 10 * currentPage - limit
    return { offset, currentPage }
}