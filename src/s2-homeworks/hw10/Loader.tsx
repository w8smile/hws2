import s from './Loader.module.css'
import download from '../../assets/loading-svgrepo-com.svg'

export const Loader = () => {
    return(
        <div className={s.loader}>
            <img src={download}/>
        </div>
    )
}

