// Import React
import React from 'react';

// Import Spectacle Core tags
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Layout } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import Components
import { ReactLogo } from './components/ReactLogo';
import { CustomText } from './components/CustomText';
import { Margin } from './components/Margin';
import { CustomLink as Link } from './components/CustomLink';
import { Emphasize } from './components/Emphasize';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#282c34',
  secondary: '#61dafb',
  textColorLight: '#ffffff',
  textColorDark: '#778899',
  linkColor: "#4682b4",
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
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} contentWidth={1200}>
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
          <CustomText textAlign="center">
            <Emphasize>JavaScript XML</Emphasize> (JSX) – an XML-like syntax extension of JavaScript.
          </CustomText>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/1-jsx.example')}
          />
          <CustomText>
            will be transpiled into js
          </CustomText>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/2-jsx.example')}
          />
        </Slide>

        <Slide align="flex-start flex-start" width="1200px" >
          <CustomText textAlign="center">
            Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
          </CustomText>
          <Image src={images.reactComponentTree} width={1200} height={500} />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/3-components-tree.example')}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Function and Class Components
          </Heading>
          <CustomText>
            The simplest way to define a component is to write a JavaScript function:
          </CustomText>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/4-function-component.example')}
          />
          <CustomText>
            You can also use an ES6 class to define a component:
          </CustomText>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/5-class-component.example')}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Rendering a Component
          </Heading>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/6-render-component.example')}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Component's Properties
          </Heading>
          <CustomText>
            <Emphasize>Props</Emphasize>(short for properties) are a Component's configuration, its options.<br/>
            Received from above and <Emphasize>immutable.</Emphasize><br/>
            A Component can't change its props.
          </CustomText>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            What is the Virtual DOM?
          </Heading>
          <CustomText>
            The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
            This process is called <Link href="https://reactjs.org/docs/reconciliation.html"><strong>reconciliation</strong>.</Link>
          </CustomText>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Virtual DOM
          </Heading>
          <Image src={images.virtualDom} height={600}/>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Update component via props
          </Heading>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/7-update-component-via-props.example')}
          />
        </Slide>

        <Slide>
          <CustomText>
            Ideally we want to write this once and have the Clock update itself.
          </CustomText>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/8-clock-without-props.example')}
          />
          <CustomText>
            To implement this, we need to add <Emphasize>“state”</Emphasize> to the Clock component.
          </CustomText>
          <CustomText>
            <Emphasize>State</Emphasize> is similar to props, but it is private and fully controlled by the component.
          </CustomText>
        </Slide>

        <Slide>
          <CustomText>
            The result looks like this:
          </CustomText>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/9-clock-with-state.example')}
          />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/code-examples/10-clock-add-lifecycle-methods.example')}
          ranges={[
            { loc: [0, 30], title: "Adding Lifecycle Methods to a Class" },
            { loc: [6, 9] },
            { loc: [10, 13] },
            { loc: [14, 19] },
            { loc: [20, 28] }
          ]}
          align="flex-start flex-start"
        />

        <Slide>
          <Heading size={6} textColor="secondary">
            Do Not Modify State Directly
          </Heading>
          <CustomText>
            This will not re-render a component:
          </CustomText>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/11-wrong-set-state.example')}
          />
          <CustomText>
            Instead, use <code>setState()</code>:
          </CustomText>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/12-correct-set-state.example')}
          />
          <CustomText>The only place where you can assign <code>this.state</code> is the constructor.</CustomText>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            What is “React Fiber”?
          </Heading>
          <CustomText>
            Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
          </CustomText>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem textSize="smaller"><Link href="https://github.com/acdlite/react-fiber-architecture" textAlign="left">Read more (by Andrew Clark).</Link></ListItem>
            <ListItem textSize="smaller"><Link href="https://dou.ua/lenta/articles/react-fiber/" textAlign="left">Good article on DOU.</Link></ListItem>
            <ListItem textSize="smaller"><Link href="https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e" textAlign="left">Another on medium.</Link></ListItem>
            <ListItem textSize="smaller"><Link href="https://www.youtube.com/watch?v=ZCuYPiUIONs" textAlign="left">Fascinating fiber review by Lin Clark (React Conf 2017).</Link></ListItem>
            <ListItem textSize="smaller"><Link href="https://present-fiber-demo.herokuapp.com/" textAlign="left">Fiber example.</Link></ListItem>
          </List>
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
