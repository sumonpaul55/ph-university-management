import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TSubmitHandler = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode
    defaultValues?: { id: string; password: string }
}
type TFormConfig = {
    defaultValues?: Record<string, any>
}
const PhForm = ({ onSubmit, children, defaultValues }: TSubmitHandler) => {
    let formConfig: TFormConfig = {}
    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues
    }
    const methods = useForm(formConfig)

    return (
        <FormProvider {...methods} >
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
                {children}
            </Form>
        </FormProvider>
    )
}

export default PhForm