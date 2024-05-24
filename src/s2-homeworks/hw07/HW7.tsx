import React, { useState } from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s2 from '../../s1-main/App.module.css';
import s from './HW7.module.css';

const arr = [
    { id: 1, value: 'x' },
    { id: 2, value: 'y' },
    { id: 3, value: 'z' },
]; // value может быть изменено

const HW7 = () => {
    const [value, setValue] = useState(1); // селект и радио должны работать синхронно

    const handleChangeOption = (option: any) => {
        setValue(option.id);
    };
    console.log(value)

    return (
        <div id="hw7">
            <div className={s2.hwTitle}>Homework #7</div>


            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <div className={s.container}>
                    <div>
                        <SuperSelect
                            id="hw7-super-select"
                            options={arr}
                            value={value}
                            onChangeOption={handleChangeOption}
                        />
                    </div>
                    <div>
                        <SuperRadio
                            id="hw7-super-radio"
                            name="hw7-radio"
                            options={arr}
                            value={value}
                            onChangeOption={handleChangeOption}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HW7;
