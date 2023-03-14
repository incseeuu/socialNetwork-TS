
export const required = (value: string) => {
    if(value){
        return undefined
    }
    return "Field is required"
}

export const maxFieldCreator = (maxLength: number = 30) => (value: string) => {
    if(value.length > maxLength){
        return "Maximum number of characters"
    }

    return undefined
}