const initState = {
    themeId: 1,
}

export type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return{
                ...state, themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
type ActionType = {
    type: 'SET_THEME_ID',
    id: number
}