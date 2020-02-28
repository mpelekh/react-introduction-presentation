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
import { Clock } from './components/Clock';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#282c34',
  secondary: '#61dafb',
  textColorLight: '#ffffff',
  textColorDark: '#778899',
  linkColor: "#4682b4"
});

const images = {
  reactComponentTree: require('../assets/images/react-component-tree.png'),
  virtualDom: require('../assets/images/virtual-dom.png'),
  trianglesDemoWithTimeSlicing: require("../assets/images/triangles-demo-with-time-slicing.png"),
  trianglesDemoWithoutTimeSlicing: require("../assets/images/triangles-demo-without-time-slicing.png"),
  reactLifecycleMethodsOld: require("../assets/images/react-component-lifecycle-methods-old.png")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'fade', 'slide', 'spin']} transitionDuration={500} theme={theme} contentWidth={1200}>
        <Slide>
          <ReactLogo />
          <Heading size={1} textColor="secondary">
            React Introduction
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
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

        <Slide textColor="textColorLight">
          <Heading size={6} textColor="secondary">
            What's React?
          </Heading>
          <List>
            <ListItem>React is a library for building composable user interfaces.</ListItem>
            <ListItem>Created by Jordan Walke in 2011, maintained by Facebook.</ListItem>
            <ListItem>144k Stars on GitHub and 7,123,192 weekly downloads from NPM.</ListItem>
            <ListItem>Actual version is 16.13.0</ListItem>
          </List>
        </Slide>

        <Slide>
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

        <Slide align="flex-start flex-start">
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
          textSize="0.7em"
          lang="js"
          code={require('raw-loader!../assets/code-examples/10-clock-add-lifecycle-methods.example')}
          ranges={[
            { loc: [0, 0], title: 'Adding Lifecycle Methods to a Class' },
            { loc: [6, 9] },
            { loc: [10, 13] },
            { loc: [14, 19] },
            { loc: [20, 28] }
          ]}
          align="flex-start flex-start"
        />

        <Slide>
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/8-clock-without-props.example')}
          />
          <Clock/>
        </Slide>

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
            The Component Lifecycle
          </Heading>
          <CustomText>Each component has several “lifecycle methods” that you can override to run code at particular times in the process.</CustomText>
          <CustomText>You can use <Link href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">this lifecycle diagram</Link> as a cheat sheet.</CustomText>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Mounting
          </Heading>
          <CustomText>
            These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
          </CustomText>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#constructor"><code>constructor()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops"><code>static getDerivedStateFromProps()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#render"><code>render()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#componentdidmount"><code>componentDidMount()</code></Link></ListItem>
          </List>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem>
              <Link href="https://reactjs.org/docs/react-component.html#unsafe_componentwillmount"><strike><code>componentWillMount()</code></strike></Link><strong style={{ color: 'red' }}> - deprecated</strong>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Updating
          </Heading>
          <CustomText>
            An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
          </CustomText>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops"><code>static getDerivedStateFromProps()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#shouldcomponentupdate"><code>shouldComponentUpdate()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#render"><code>render()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate"><code>getSnapshotBeforeUpdate()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#componentdidupdate"><code>componentDidUpdate()</code></Link></ListItem>
          </List>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem>
              <Link href="https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate"><strike><code>componentWillUpdate()</code></strike></Link><strong style={{ color: 'red' }}> - deprecated</strong>
            </ListItem>
            <ListItem>
              <Link href="https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops"><strike><code>componentWillReceiveProps()</code></strike></Link><strong style={{ color: 'red' }}> - deprecated</strong>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Unmounting
          </Heading>
          <CustomText>
            This method is called when a component is being removed from the DOM:
          </CustomText>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#componentwillunmount"><code>componentWillUnmount()</code></Link></ListItem>
          </List>
        </Slide>

        <Slide>
          <Link href="https://codesandbox.io/s/lro5jp75ll" textSize="larger">Component Lifecycle Demo</Link>
        </Slide>

        <CodeSlide
          transition={[]}
          textSize="0.7em"
          lang="js"
          code={require('raw-loader!../assets/code-examples/17-react-renderer.example')}
          ranges={[
            { loc: [0, 0], title: 'Component vs PureComponent' },
            { loc: [0, 80] },
            { loc: [37, 51] },
            { loc: [81, 86] },
            { loc: [86, 119] },
            { loc: [73, 76] },
          ]}
          align="flex-start flex-start"
        />

        <Slide>
          <Heading size={6} textColor="secondary">
            Error Handling
          </Heading>
          <CustomText>
            These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
          </CustomText>

          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror"><code>static getDerivedStateFromError()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/react-component.html#componentdidcatch"><code>componentDidCatch()</code></Link></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            React Component LifeCycle methods before 16.3 version
          </Heading>
          <Image src={images.reactLifecycleMethodsOld} />
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
            <ListItem textSize="smaller"><Link href="https://mpelekh.github.io/react-stack-vs-fiber-demo/" textAlign="left">Fiber example.</Link></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary" textAlign="left">
            React Fiber Example
          </Heading>
          <iframe width="1200" height="600" src="https://www.youtube.com/embed/Qu_6ItnlDQg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <CustomText>The React Fiber Triangle implementation is available <Link href="https://github.com/facebook/react/blob/master/fixtures/fiber-triangle/index.html">here.</Link></CustomText>
        </Slide>

        <Slide align="flex-start flex-start">
          <Image src={images.trianglesDemoWithoutTimeSlicing} width={1200} />
          <Image src={images.trianglesDemoWithTimeSlicing} width={1200} />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Typechecking with PropTypes
          </Heading>
          <CustomText>To run typechecking on the props for a component, you can assign the special <Emphasize>propTypes</Emphasize> property:</CustomText>
          <CodePane
            lang="jsx"
            textSize="0.6em"
            source={require('raw-loader!../assets/code-examples/13-prop-types-function.example')}
          />
          <CustomText>or for class component:</CustomText>
          <CodePane
            lang="jsx"
            textSize="0.6em"
            source={require('raw-loader!../assets/code-examples/14-prop-types-component.example')}
          />
        </Slide>

        <Slide>
          <CustomText>
            <Emphasize>PropTypes</Emphasize> exports a range of validators that can be used to make sure the data you receive is valid.
            In the previous example, we were using <Emphasize>PropTypes.string.</Emphasize> When an invalid value is provided for a prop, a <Emphasize>warning will be shown in the JavaScript console.</Emphasize>
          </CustomText>
          <CustomText>For performance reasons, <Emphasize>propTypes</Emphasize> is only checked in <Emphasize>development mode.</Emphasize></CustomText>
        </Slide>

        <CodeSlide
          transition={[]}
          textSize="0.7em"
          lang="js"
          code={require('raw-loader!../assets/code-examples/15-available-prop-types.example')}
          ranges={[
            { loc: [0, 0], title: 'Examples of the different validators' },
            { loc: [3, 12] },
            { loc: [13, 17] },
            { loc: [18, 20] },
            { loc: [21, 24] },
            { loc: [25, 28] },
            { loc: [29, 35] },
            { loc: [36, 38] },
            { loc: [39, 41] },
            { loc: [42, 47] },
            { loc: [48, 51] },
            { loc: [52, 54] },
            { loc: [55, 70] },
            { loc: [71, 94] }
          ]}
          align="flex-start flex-start"
        />

        <Slide>
          <Heading size={6} textColor="secondary" textAlign="left">
            Error Boundaries
          </Heading>
          <CustomText>
            Error boundaries are React components that <Emphasize>catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI</Emphasize>
            {' '}
            instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
          </CustomText>

          <Margin top="45px" />

          <Heading size={6} textColor="secondary" textAlign="left">
            Error boundaries do not catch errors for:
          </Heading>
          <List textColor="textColorLight">
            <ListItem textSize="xx-large">Event handlers</ListItem>
            <ListItem textSize="xx-large">Asynchronous code (e.g. <code>setTimeout</code> or <code>requestAnimationFrame</code> callbacks)</ListItem>
            <ListItem textSize="xx-large">Server side rendering</ListItem>
            <ListItem textSize="xx-large">Errors thrown in the error boundary itself (rather than its children)</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          textSize="0.7em"
          lang="js"
          code={require('raw-loader!../assets/code-examples/16-error-boundary.example')}
          ranges={[
            { loc: [0, 0], title: 'Error boundaries' },
            { loc: [6, 10] },
            { loc: [11, 15] },
            { loc: [1, 5] },
            { loc: [16, 21] },
          ]}
          align="flex-start flex-start"
        />

        <Slide>
          <Link href="https://codesandbox.io/s/j4v2y35vny" textSize="larger">Component Error Boundaries Demo</Link>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Conclusions
          </Heading>
          <Margin />
          <CustomText textSize="smaller"><Emphasize>React</Emphasize> - Just a UI library, not a framework.</CustomText>
          <CustomText textSize="smaller"><Emphasize>JSX</Emphasize> - Allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects.</CustomText>
          <CustomText textSize="smaller"><Emphasize>Virtual DOM</Emphasize> - A JavaScript representation of the actual DOM.</CustomText>
          <CustomText textSize="smaller"><Emphasize>Reconciliation</Emphasize> - A process through which React updates the DOM.</CustomText>
          <CustomText textSize="smaller"><Emphasize>Fiber</Emphasize> - A new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.</CustomText>
          <CustomText textSize="smaller"><Emphasize>Function Component, Component/PureComponent</Emphasize> - The ways in which you create a new component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>render (method)</Emphasize> - Describes what the UI will look like for the particular component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>ReactDOM.render</Emphasize> - Renders a React component to a DOM node</CustomText>
          <CustomText textSize="smaller"><Emphasize>props</Emphasize> - The data which is passed to the component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>propTypes</Emphasize> - Allows you to control the presence, or types of certain props passed to the child component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>defaultProps</Emphasize> - Allows you to set default props for your component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>state</Emphasize> - The internal data store (object) of a component.</CustomText>
          <CustomText textSize="smaller"><Emphasize>setState</Emphasize> - A helper method used for updating the state of a component and re-rendering the UI.</CustomText>
        </Slide>

        <Slide>
          <Heading size={1} textColor="secondary">
            Thank you!
          </Heading>
          <CustomText textAlign="center">Mykola Pelekh</CustomText>
        </Slide>

        <Slide>
          <Heading size={1} textColor="secondary">
            Questions?
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
