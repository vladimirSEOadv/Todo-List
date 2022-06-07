export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const  getPageArray = (totalPages) => {
    let result = []
    for (let i = 1; i < totalPages; i++) {
        result.push(i)
    }
    return result
}