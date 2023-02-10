export type NavbarPageType = {
    sidebar: SidebarStateType[]
}

export type SidebarStateType = {
    id: number
    name: string
    avatar: string
}

export type NavbarACType = {}

const initialState: NavbarPageType = {
    sidebar: [
        {
            id: 1,
            name: 'Peter',
            avatar: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'
        },
        {
            id: 2,
            name: 'John',
            avatar: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'
        },
        {
            id: 3,
            name: 'Lora',
            avatar: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'
        },
    ]
}

export const navbarPageReducer = (state = initialState, action: NavbarACType) => {
    return state
}

export default navbarPageReducer;