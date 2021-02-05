import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, DatePicker, Text} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('DataPicker', module)
  .addDecorator(withKnobs)
  .add(
    'DataPicker',
    () => (
      <Container>
        <Header>
          <Text>DataPicker Example</Text>
        </Header>
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            disabled={false}
          />
        </Content>
      </Container>
    ),
    {notes: ' Accordion setup notes...'},
  );
