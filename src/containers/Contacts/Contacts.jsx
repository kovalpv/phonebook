import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchContacts as fetchContactsAction,
  fetchCountriesPhoneCodes as fetchCountriesPhoneCodesAction,
} from './store';

import {
  fetchContacts as fetchContactsApi,
  fetchCountriesPhoneCodes as fetchCountriesPhoneCodesApi,
} from './services';
import { getContacts } from './selectors';

const Contacts = (props) => {
  const { fetchContacts, fetchCountriesPhoneCodes } = props;

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  useEffect(() => {
    fetchCountriesPhoneCodes();
  }, [fetchCountriesPhoneCodes]);

  return <div>123</div>;
};

Contacts.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  fetchCountriesPhoneCodes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  fetchContacts: fetchContactsAction(fetchContactsApi),
  fetchCountriesPhoneCodes: fetchCountriesPhoneCodesAction(
    fetchCountriesPhoneCodesApi,
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
