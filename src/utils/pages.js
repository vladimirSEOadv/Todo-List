import {useMemo} from "react";

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const usePagination = (totalPages, limit) => { // Новая функция
    const pagesArray = useMemo(() => {
        console.log('start Memo')
        let result = []
        for (let i = 1; i < totalPages; i++) {
            result.push(i)
        }
        return result
    },[totalPages], [limit])
    return pagesArray
}

