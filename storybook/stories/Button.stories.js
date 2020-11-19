import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {BufferView} from '../decorators/Decorators';
import {Container, Content, Button, Text, Icon} from 'native-base';

import {withKnobs, boolean} from '@storybook/addon-knobs';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
};

storiesOf('Button')
  .addDecorator(BufferView)
  .addDecorator(withKnobs)
  .add(
    'Buttons Options',
    () => (
      <Container style={styles.container}>
        <Content>
          <Button iconLeft light>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name="arrow-forward" />
          </Button>

          <Button>
            <Icon name="home" />
          </Button>

          <Button
            light
            transparent={boolean('Make Light button transparent', false)}
            bordered={boolean('Make Light button bordered', false)}
            rounded={boolean('Make Light button rounded', false)}>
            <Text> Light </Text>
          </Button>

          <Button
            transparent={boolean('Disable button transparent', false)}
            bordered={boolean('Disable button bordered', false)}
            rounded={boolean('Disable button rounded', false)}
            disabled={boolean('Disable', false)}>
            <Text> Disable </Text>
          </Button>
          <Button
            primary
            transparent={boolean('Make Primary button transparent', false)}
            bordered={boolean('Make Primary button bordered', false)}
            rounded={boolean('Make Primary button rounded', false)}
            small={boolean('Make Primary button Small', false)}
            large={boolean('Make Primary button Large', false)}>
            <Text> Primary </Text>
          </Button>
          <Button
            success
            transparent={boolean('Make Success v transparent', false)}
            bordered={boolean('Make Success button bordered', false)}
            rounded={boolean('Make Success button rounded', false)}
            small={boolean('Make Success button Small', false)}
            large={boolean('Make Success button Large', false)}>
            <Text> Success </Text>
          </Button>
          <Button
            info
            block
            transparent={boolean('Make Info transparent', false)}>
            <Text> Info </Text>
          </Button>
          <Button
            warning
            transparent={boolean('Make Warning transparent', false)}>
            <Text> Warning </Text>
          </Button>
          <Button
            danger
            transparent={boolean('Make Danger transparent', false)}>
            <Text> Danger </Text>
          </Button>
          <Button dark transparent={boolean('Make Dark transparent', false)}>
            <Text> Dark </Text>
          </Button>
        </Content>
      </Container>
    ),
    {
      notes: ' Note: Always import and use Text from NativeBase with Buttons.',
    },
  );
