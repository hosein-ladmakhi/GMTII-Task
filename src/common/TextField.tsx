import { FC } from "react";
import { Controller } from "react-hook-form";

interface IProps {
    name: string;
    variant: 'text' | 'textarea';
    label: string;
    placeholder: string;
    control: any
    extraContainerClass?: string
}



const TextField: FC<IProps> = ({ label, name, placeholder, variant, control, extraContainerClass }) => {

    const labelClass = 'text-base block text-gray-800'

    const errorLabelClass = 'text-red-500'

    const errorMessageClass = 'text-xs text-red-500'

    const inputClass = 'mt-2 w-full rounded border-2 px-3 focus:outline-none focus:ring focus:border-blue-500 border-2 border-gray-300'

    const inputErrorClass = 'border-red-500 focus:border-red-400'

    const inputTextClass = 'h-10'

    const containerClass = 'w-full my-3'

    const textFieldClass = 'p-3'

    let baseLabelClass = [labelClass]

    let baseInputTextClass = [inputClass, inputTextClass]

    let baseTextFieldClass = [inputClass, textFieldClass]

    let baseErrorMessageClass = [errorMessageClass]

    let baseContainerClass = [containerClass]

    return <Controller name={name} control={control} render={({ field, fieldState }) => {

        const inputErr = fieldState?.error?.message || ''

        if (inputErr) {
            baseLabelClass = [...baseLabelClass, errorLabelClass]
            baseInputTextClass = [...baseInputTextClass, inputErrorClass]
            baseTextFieldClass = [...baseTextFieldClass, inputErrorClass]
        }

        if (extraContainerClass) {
            baseContainerClass = [...baseContainerClass, extraContainerClass]
        }

        const printTextField = () => {
            switch (variant) {
                case 'text':
                    return <input {...field} type="text" placeholder={placeholder} className={baseInputTextClass.join(' ')} />
                case 'textarea':
                    return <textarea {...field} placeholder={placeholder} className={baseTextFieldClass.join(' ')} rows={10}></textarea>
                default:
                    return <></>
            }
        }
        return (
            <div className={baseContainerClass.join(' ')}>
                <label className={baseLabelClass.join(' ')}>{label}</label>
                {printTextField()}
                <small className={baseErrorMessageClass.join(' ')}>{inputErr}</small>
            </div>
        )
    }} />
}

export default TextField;