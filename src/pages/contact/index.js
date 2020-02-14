import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Layout from '../../components/Layouts/Main';
import Services from './Services';
import Header from './Header';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const SignupForm = ({ data }) => {
  return (
    <Layout
      Header={() => {
        return (
          <div className="container">
            <Header />
            <Services />
          </div>
        );
      }}
    >
      <section className="section">
        <div className="container">
          <Formik
            initialValues={{
              name: '',
              email: '',
              number: '',
              subject: '',
              message: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              message: Yup.string().required('Required')
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
                  <label htmlFor="name">Your name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="email">Your e-mail</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <label htmlFor="number">Your Contact number</label>
                  <Field name="number" type="text" />
                  <ErrorMessage name="number" />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="subject">Subject</label>
                  <Field name="subject" type="text" />
                  <ErrorMessage name="subject" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <label htmlFor="message">Subject</label>
                  <Field name="message" as="textarea" className="form-input" />
                  <ErrorMessage name="message" />
                </Grid>
              </Grid>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </section>
    </Layout>
  );
};

export default SignupForm;
