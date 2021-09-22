import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Container, Header, Text} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Layout /Grid', module)
  .addDecorator(withKnobs)
  .add(
    'Layout / Grid',
    () => (
      <Container>
        <Header>
          <Text>Grid</Text>
        </Header>
        <Grid>
          <Col style={{backgroundColor: '#635DB7', height: 200}}></Col>
          <Col style={{backgroundColor: '#00CE9F', height: 200}}></Col>
        </Grid>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
