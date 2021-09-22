import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, Icon, Text} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('IconsApp', module)
  .addDecorator(withKnobs)
  .add(
    'IconsApp',
    () => (
      <Container>
        <Header>
          <Text>Icons</Text>
        </Header>
        <Content>
          <Icon type="FontAwesome" name="home" />
          <Icon
            type="FontAwesome"
            name="glass"
            style={{fontSize: 20, color: 'red'}}
          />
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
