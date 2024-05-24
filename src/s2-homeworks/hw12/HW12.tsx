import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, initStateType, themeReducer} from './bll/themeReducer'
import {combineReducers} from "redux";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]
const appReducer = combineReducers({
    theme: themeReducer
})

type AppRootType = ReturnType<typeof appReducer>


const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<AppRootType, number>(themes=>themes.theme.themeId)
    console.log(themeId)
    const dispatch = useDispatch()

    const change = (id: any) => { // дописать функцию
        dispatch(changeThemeId(id.id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    onChangeOption={change}
                    options={themes}
                    // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12
