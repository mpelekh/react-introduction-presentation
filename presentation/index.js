// Import React
import React from 'react';

// Import Spectacle Core tags
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Link } from 'spectacle';

// Import Components
import { ReactLogo } from './components/ReactLogo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#282c34',
  secondary: '#61dafb',
  textColorLight: '#ffffff',
  textColorDark: '#778899',
});

const images = {
  reactComponentTree: require('../assets/images/react-component-tree.png'),
  virtualDom: require('../assets/images/virtual-dom.png'),
  trianglesDemoWithTimeSlicing: require("../assets/images/triangles-demo-with-time-slicing.png"),
  trianglesDemoWithoutTimeSlicing: require("../assets/images/triangles-demo-without-time-slicing.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <ReactLogo />
          <Heading size={1} textColor="secondary">
            React Introduction
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem>What's React?</ListItem>
            <ListItem>JSX</ListItem>
            <ListItem>Components</ListItem>
            <ListItem>Virtual DOM</ListItem>
            <ListItem>Properties and State</ListItem>
            <ListItem>Lifecycle Methods</ListItem>
            <ListItem>Deprecated Lifecycle Methods</ListItem>
            <ListItem>Component vs PureComponent</ListItem>
            <ListItem>React PropTypes</ListItem>
            <ListItem>Error Boundaries</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="textColorLight">
          <Heading size={6} textColor="secondary">
            What's React?
          </Heading>
          <List>
            <ListItem>React is a library for building composable user interfaces.</ListItem>
            <ListItem>Created by Jordan Walke in 2011, maintained by Facebook.</ListItem>
            <ListItem>127,342 Stars on GitHub and 4,945,812 weekly downloads from NPM.</ListItem>
            <ListItem>Actual version is 16.8.6</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="textColorLight">
          <Text textColor="textColorLight">
            <strong>JavaScript XML</strong> – an XML-like syntax extension of JavaScript.
          </Text>
          <Text textColor="textColorDark" textAlign="left">
            This JSX
          </Text>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/1-jsx.example')}
          />
          <Text textColor="textColorDark" textAlign="left">
            will be transpiled into js
          </Text>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/2-jsx.example')}
          />
        </Slide>

        <Slide align="flex-start flex-start">
          <Heading size={6} textColor="secondary">
            Components
          </Heading>
          <Image src={images.reactComponentTree} width={1200} />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/3-components-tree.example')}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            What is the Virtual DOM?
          </Heading>
          <Text textAlign="left" textColor="textColorLight">
            The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
            This process is called <Link href="https://reactjs.org/docs/reconciliation.html">reconciliation.</Link>
          </Text>
        </Slide>

        <Slide>
          <Image src={images.virtualDom} width={1200} />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            What is “React Fiber”?
          </Heading>
          <Text textAlign="left" textColor="textColorLight">
            Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
          </Text>
          <Text textAlign="left">
            <Link href="https://github.com/acdlite/react-fiber-architecture" textAlign="left">Read more (by Andrew Clark).</Link>
          </Text>
          <Text textAlign="left">
            <Link href="https://dou.ua/lenta/articles/react-fiber/" textAlign="left">Good article on DOU.</Link>
          </Text>
          <Text textAlign="left">
            <Link href="https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e" textAlign="left">Another on medium.</Link>
          </Text>
          <Text textAlign="left">
            <Link href="https://www.youtube.com/watch?v=ZCuYPiUIONs" textAlign="left">Fascinating fiber review by Lin Clark (React Conf 2017).</Link>
          </Text>
          <Text textAlign="left">
            <Link href="https://present-fiber-demo.herokuapp.com/" textAlign="left">Fiber example.</Link>
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary" textAlign="left">
            React Fiber Example
          </Heading>
          <iframe width="1200" height="600" src="https://www.youtube.com/embed/Qu_6ItnlDQg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Slide>

        <Slide align="flex-start flex-start">
          <Image src={images.trianglesDemoWithoutTimeSlicing} width={1200} />
          <Image src={images.trianglesDemoWithTimeSlicing} width={1200} />
        </Slide>

      </Deck>
    );
  }
}
