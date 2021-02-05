import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, Accordion, Text} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

import AcordionNotes from '../notes/AcordionReadme';

const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add(
    'Accordion',
    () => (
      <Container>
        <Header>
          <Text>Accordion Example</Text>
        </Header>
        <Content padder>
          {/* <Accordion
            dataArray={dataArray}
            expanded={0}
            icon="add"
            expandedIcon="remove"
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#ddecf8' }}
          /> */}
        </Content>
      </Container>
    ),
    {notes: AcordionNotes},
  );
