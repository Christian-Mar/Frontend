import React, { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

function ContactPage () {
  return 
  <Fragment>
  <Head>
    <title>Contacteer me</title>
    <meta name='description' content='Stuur een berichtje'/>
  </Head>
  <ContactForm />
  </Fragment>
}

export default ContactPage;
