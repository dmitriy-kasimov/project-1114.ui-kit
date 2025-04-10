import React, { FC, memo} from "react";
import { TextAreaProps } from "../types/TextAreaProps";
import cls from './TextArea.module.scss'
import { Text } from "ui/components/shared/Text";

import { classNames } from "lib/classNames/classNames";

export const TextArea: FC<TextAreaProps> = memo(props => {
    
    const {
        value,     
        onChange,
        
        label,
        limit,

        disabled=false,
        rows=5,
        cols=25,
        className='',
        ...otherProps
    } = props;

    return(
        <div className={classNames(cls.field, {[cls.disabled]: disabled}, [className])}>
            <textarea 
                className={cls.input}
                value={value}
                onChange={e => onChange(e.target.value)}
                rows={rows}
                cols={cols}
                id={label}
                placeholder=''
                autoComplete="off"
                spellCheck={false}
                disabled={disabled}
                {...otherProps}
            />
            <label 
                className={cls.label} 
                htmlFor={label}
            >
                <Text size="s">
                    {label}
                </Text>
            </label>
        </div>
    )
});