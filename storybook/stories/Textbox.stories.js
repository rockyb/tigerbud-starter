import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  Container,
  Content,
  Input,
  Item,
  Text,
  Header,
  Icon,
  Form,
  Textarea
} from 'native-base';
import { withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('Textbox')
  .addDecorator(withKnobs)
  .add(
    'Textbox',
    () => (
      <Container>
        <Header>
          <Text>Textbox </Text>
        </Header>
        <Content padder>
          <Item
            regular={boolean('Regular Textbox', false)}
            rounded={boolean('Rounded Textbox', false)}
          >
            <Input placeholder="Textbox options" />
          </Item>

          {/* // Text input box with icon aligned to the left */}
          <Item>
            <Icon active name="home" />
            <Input placeholder="Icon Textbox" />
          </Item>
          {/* // Text input box with icon aligned to the right */}
          <Item>
            <Input placeholder="Icon Alignment in Textbox" />
            <Icon active name="swap" />
          </Item>

          <Item success>
            <Input placeholder="Textbox with Success Input" />
            <Icon name="checkmark-circle" />
          </Item>

          <Item error>
            <Input placeholder="Textbox with Error Input" />
            <Icon name="close-circle" />
          </Item>

          <Item disabled>
            <Input disabled placeholder="Disabled Textbox" />
            <Icon name="information-circle" />
          </Item>

          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
        </Content>
      </Container>
    ),
    {
      notes: '  notes...'
    }
  );
