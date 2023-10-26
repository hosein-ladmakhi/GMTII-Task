import { FC } from "react";
import { Controller } from "react-hook-form";

interface IProps {
    name: string;
    label: string;
    control: any
    extraContainerClass?: string
    extraFormGroupClass?: string;
    extraCheckboxClass?: string;
    extraLabelClass?: string;
}



const Checkbox: FC<IProps> = ({ control, label, name, extraCheckboxClass, extraContainerClass, extraFormGroupClass, extraLabelClass }) => {

    const containerClass = 'w-full my-3'

    const formGroupClass = 'flex justify-start items-center'

    const checkboxClass = 'mr-2 h-5 w-5'

    const labelClass = 'text-base text-gray-800'

    let baseContainerClass = [containerClass]

    let baseFormGroupClass = [formGroupClass]

    let baseCheckboxClass = [checkboxClass]

    let baseLabelClass = [labelClass]

    if (extraContainerClass) {
        baseContainerClass = [...baseContainerClass, extraContainerClass]
    }

    if (extraFormGroupClass) {
        baseFormGroupClass = [...baseFormGroupClass, extraFormGroupClass]
    }

    if (extraCheckboxClass) {
        baseCheckboxClass = [...baseCheckboxClass, extraCheckboxClass]
    }

    if (extraLabelClass) {
        baseLabelClass = [...baseLabelClass, extraLabelClass]
    }

    return (
        <Controller name={name} control={control} render={({ field }) => {
            return (
                <div className={baseContainerClass.join(' ')}>
                    <div className={baseFormGroupClass.join(' ')}>
                        <input {...field} type="checkbox" checked={field.value} className={baseCheckboxClass.join(' ')} />
                        <label className={baseLabelClass.join(' ')}>{label}</label>
                    </div>
                </div>
            )
        }} />
    )
}


export default Checkbox;