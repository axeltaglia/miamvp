export const getErrorMessage = (e: any): string => {
    if(typeof e.response.data === "string") {
        console.log(e)
        return e.response.data
    } else {
        throw e
    }
}