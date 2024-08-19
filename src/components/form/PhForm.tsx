import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TSubmitHandler = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode
    defaultValues?: { id: string; password: string },
    resolver?: any
}
type TFormConfig = {
    defaultValues?: Record<string, any>,
    resolver?: any
}

const PhForm = ({ onSubmit, children, defaultValues, resolver }: TSubmitHandler) => {
    let formConfig: TFormConfig = {}
    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues
    }
    if (resolver) {
        formConfig["resolver"] = resolver
    }
    const methods = useForm(formConfig)

    const submitForm: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset()
    }

    return (
        <FormProvider {...methods} >
            <Form layout="vertical" onFinish={methods.handleSubmit(submitForm)}>
                {children}
            </Form>
        </FormProvider>
    )
}

export default PhForm