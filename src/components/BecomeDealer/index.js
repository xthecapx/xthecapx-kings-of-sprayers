import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = ({ form }) => {
  const { name, company, email, number, reason, submit } = form;
  return (
    <section className="section">
      <div className="container">
        <Formik
          initialValues={{
            company: '',
            email: '',
            name: '',
            number: '',
            reason: ''
          }}
          validationSchema={Yup.object({
            company: Yup.string().required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            name: Yup.string().required('Required'),
            number: Yup.string().required('Required'),
            reason: Yup.string().required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <Grid container>
              <Grid item xs={6}>
                <label htmlFor="name">{name}</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="company">{company}</label>
                <Field name="company" type="text" />
                <ErrorMessage name="company" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <label htmlFor="email">{email}</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="number">{number}</label>
                <Field name="number" type="text" />
                <ErrorMessage name="number" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <label htmlFor="reason">{reason}</label>
                <Field name="reason" as="textarea" className="form-input" />
                <ErrorMessage name="reason" />
              </Grid>
            </Grid>
            <button type="submit">{submit}</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignupForm;
