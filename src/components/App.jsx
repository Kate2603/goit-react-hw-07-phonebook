import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperations';

import { useSelector } from 'react-redux';
import { selectorContacts } from  '../redux/contactsSelectors';
import { selectorIsLoading } from '../redux/contactsSelectors';
import { selectorError } from '../redux/contactsSelectors';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  const contacts = useSelector(selectorContacts);
  const error = useSelector(selectorError);
  const isLoading = useSelector(selectorIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {error && error}
        <ContactList />
        {contacts.length > 0 && <ContactList />}
      </Section>
    </>
  );
};