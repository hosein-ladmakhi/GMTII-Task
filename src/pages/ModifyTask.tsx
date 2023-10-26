import { ActionFunctionArgs, useParams, useSubmit } from "react-router-dom";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import zod from "zod"
import { CheckboxKit, TextFieldKit } from "../common";
import { useEffect } from "react";


export const createOrEditTaskAction = async (data: ActionFunctionArgs<any>) => {
    const formData = await data.request.formData()
    const requestBody = {
        title: formData.get('title'),
        description: formData.get('description'),
        completed: formData.get('isComplete') === 'true'
    }
    console.log(requestBody)
    return data;
}

const formValidation = zod.object({
    title: zod.string({ required_error: 'You must provide your title' }).min(3, 'Your title must at least contain 3 character'),
    description: zod.string({ required_error: 'You must provide your description' }).min(3, 'Your description must at least contain 3 character'),
    isComplete: zod.boolean().optional()
})

type TFormData = zod.infer<typeof formValidation>

function ModifyTaskPage() {
    const params = useParams<'id'>()
    const submitHandler = useSubmit();

    const { control, setValue, handleSubmit } = useForm<TFormData>({
        resolver: zodResolver(formValidation), mode: "all", defaultValues: {
            description: "",
            title: "",
            isComplete: false
        }
    })

    useEffect(() => {
        if (params.id) {
            setValue('title', 'updated title')
            setValue('description', 'updated description')
            setValue('isComplete', false)
        }
    }, [params.id])


    const onSubmit = (data: TFormData) => submitHandler({ ...data, id: params.id! }, { method: 'POST' })


    return (
        <div className="w-full sm:w-4/12 mx-auto flex justify-center items-center flex-col">
            <h1 className="border-b-2 border-gray-800 font-bold text-2xl small-caps">{params.id ? 'Edit Your Task' : 'Create New Task'}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full my-5">
                <TextFieldKit control={control} label="Title" placeholder="Enter Your Title" name="title" variant="text" />
                <TextFieldKit control={control} label="Description" placeholder="Enter Your Description" name="description" variant="textarea" />
                <CheckboxKit control={control} label="Is Complete Your Task ?" name="isComplete" />
                <button className="text-base font-bold mt-5 bg-blue-600 text-white text-sm py-2 w-full h-12 rounded hover:bg-blue-700 transition inline-block mr-5">
                    {params.id ? 'Edit Task' : 'Create Task'}
                </button>
            </form>
        </div>
    )
}

export default ModifyTaskPage;