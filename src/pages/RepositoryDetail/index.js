import React from 'react';
import PropTypes from 'prop-types';
import { Browser } from './styles';

export default function RepositoryDetail({ navigation }) {
  const repository = navigation.getParam('repository');
  return <Browser source={{ uri: repository.html_url }} />;
}

RepositoryDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

RepositoryDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
