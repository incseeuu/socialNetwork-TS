type PeoplePageACType = AddFriendACType
    | DeleteFriendACType
    | SetUsersAC
    | SetTotalCountAC
    | SetCurrentPage
    | SetLoader

type AddFriendACType = ReturnType<typeof addFriendAC>
type DeleteFriendACType = ReturnType<typeof deleteFriendAC>
type SetUsersAC = ReturnType<typeof setUsersAC>
type SetTotalCountAC = ReturnType<typeof setTotalCountAC>
type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
type SetLoader = ReturnType<typeof setLoaderAC>

export type PeopleStateType = {
    items: GetUsersType[] | null
    totalCount: number
    pageSize: number
    currentPage: number
    loader: boolean
}

export type GetUsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosUsersType
    status: string | null
    followed: boolean
}

type PhotosUsersType = {
    small: string | null
    large: string | null
}

const initialState: PeopleStateType = {
    items: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    loader: true
}

const peoplePageReducer = (state = initialState, action: PeoplePageACType) => {
    switch (action.type) {
        case "ADD-FRIEND":
            return {...state, items: state.items?.map(el => el.id === action.payload.userId
                    ? {...el, friend: true}
                    : el)}
        case "DELETE-FRIEND":
            return {...state, items: state.items?.map(el => el.id === action.payload.userId
                    ? {...el, friend: false}
                    : el)}
        case "SET-USERS":
            return {...state, items: action.payload.items}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.count}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-LOADER":
            return  {...state, loader: action.payload.value}
    }
    return state
}

export const addFriendAC = ( userId: number) => {
    return {
        type: "ADD-FRIEND",
        payload: {
            userId
        }
    } as const
}

export const deleteFriendAC = (userId: number) => {
    return {
        type: "DELETE-FRIEND",
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (items: GetUsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            items
        }
    } as const
}

export const setTotalCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            count
        }
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            page
        }
    } as const
}

export const setLoaderAC = (value: boolean) => {
    return {
        type: 'SET-LOADER',
        payload: {
            value
        }
    } as const
}

export default peoplePageReducer;