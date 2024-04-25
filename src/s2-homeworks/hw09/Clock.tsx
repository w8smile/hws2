import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)


    useEffect(() => {
        if (timerId!==undefined){
            let timer = setInterval(()=>{
                setDate(new Date())
            },1000)
            return ()=>{clearInterval(timer)}
        }
    }, [timerId]);


    const start = () => {
       let timer:number =  +setInterval(()=>{
           console.log('TIK')
            setDate(new Date())
        }, 1000)
        setTimerId(timer)


        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval
    }

    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)

        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => {
        setShow(true)
        // пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => {
        setShow(false)
        // пишут студенты // спрятать дату если мышка не наведена

    }


    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    const stringDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    const stringMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
