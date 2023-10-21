import {Field, Form, Formik, FormikProps} from "formik";
import * as yup from "yup";

type FormFieldsData = {
    name: string;
    email: string;
}

export function MyForm() {
    const initialValues: FormFieldsData = {
        name: '',
        email: ''
    }

    const validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().required()
    });

    const onSubmit = async (values: FormFieldsData) => {
        console.log(values);
        await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formikProps: FormikProps<FormFieldsData>) => (
                    <Form>
                        <div>
                            <label>Nome:</label>
                            <Field name='name'/>
                            <small style={{color: 'red'}}>{formikProps.errors.name}</small>
                        </div>

                        <div>
                            <label>Email:</label>
                            <Field name='email' type='email'/>
                            <small style={{color: 'red'}}>{formikProps.errors.email}</small>
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