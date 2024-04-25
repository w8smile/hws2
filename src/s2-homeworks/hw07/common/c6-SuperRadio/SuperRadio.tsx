import React, { ChangeEvent, useState } from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[];
    onChangeOption?: (option: any) => void;

    spanProps?: DefaultSpanPropsType; // пропсы для спана
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (options) {
            const selectedOption = options.find((o) => o.id === +e.target.value);
            if (selectedOption) {
                onChangeOption && onChangeOption(selectedOption);
                onChange && onChange(e);
            }
        }
    };

    const finalRadioClassName =
        s.radio + (className ? ' ' + className : '');
    const spanClassName =
        s.span + (spanProps?.className ? ' ' + spanProps.className : '');

    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    name={name}
                    checked={o.id === value}
                    value={o.id}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
            {o.value}
          </span>
            </label>
        ))
        : [];

    return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
