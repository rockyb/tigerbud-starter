import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container, Header, Icon, Picker, Form, Text } from 'native-base';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Picker')
  .addDecorator(withKnobs)
  .add(
    'Picker',
    () => (
      <Container>
        <Header>
          <Text>Picker</Text>
        </Header>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            selectedValue="ATM Card"
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
