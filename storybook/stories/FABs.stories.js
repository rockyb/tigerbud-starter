import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, View, Button, Icon, Fab, Text} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('FABs', module)
  .addDecorator(withKnobs)
  .add(
    'FABs',
    () => (
      <Container>
        <Header>
          <Text>Accordion Example</Text>
        </Header>
        <View style={{flex: 1}}>
          <Fab
            active
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: '#5067FF'}}
            position="bottomRight"
            //onPress={() => this.setState({ active: true })}
          >
            <Icon name="share" />
            <Button style={{backgroundColor: '#34A34F'}}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{backgroundColor: '#3B5998'}}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{backgroundColor: '#DD5144'}}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    ),
    {notes: ' Accordion setup notes...'},
  );
