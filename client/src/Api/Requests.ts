import instance from '../Axios/Axios'

export const getBooks = () => instance.get(`/fetch-books`)
export const searchBook = (data: string, page: number) => instance.get(`/search?q=${data}&page=${page}`)
