import {Field, Form, Formik, FormikProps} from "formik";

type FormFieldsData = {
    name: string;
    email: string;
}

export function MyForm() {
    const initialValues: FormFieldsData = {
        name: '',
        email: ''
    }

    const onSubmit = async (values: FormFieldsData) => {
        console.log(values);
        await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {
                (formikProps: FormikProps<FormFieldsData>) => (
                    <Form>
                        <div>
                            <label>Nome:</label>
                            <Field name='name'/>
                        </div>

                        <div>
                            <label>Email:</label>
                            <Field name='email' type='email'/>
                        </div>

                        <div>
                            {
                                formikProps.isSubmitting ?
                                    <button disabled>
                                        Carregando...
                                    </button> :
                                    <button type='submit'>Enviar</button>
                            }
                        </div>
                    </Form>
                )
            }
        </Formik>
    );
}