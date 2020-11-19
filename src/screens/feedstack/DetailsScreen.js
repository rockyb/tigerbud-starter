import React from 'react';
import Card from '../../components/card/Card';

const DetailsScreen = ({route: {params}}) => {
  return <Card {...params} renderFooter={null} />;
};

export default DetailsScreen;
