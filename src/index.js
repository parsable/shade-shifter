import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Clipboard from "react-clipboard.js";

import {
  Wrapper,
  Header,
  Footer,
  ShadeGroup,
  CodeBlock,
  CopyButton
} from "./styledComponents";

import "./styles.css";
import IndividualShade from "./IndividualShade";

class App extends React.Component {
  state = {
    current_theme: null,
    copied: false
  };

  DEFAULT_THEME = {
    "primary-a": "blue",
    "primary-b": "red",
    "primary-c": "white",
    "secondary-a": "black",
    "secondary-b": "purple",
    "secondary-c": "pink"
  };

  SUPPORTED_ITEMS = {
    "primary-a": "Navbar",
    "primary-b": "Sidebar",
    "primary-c": "Buttons",
    "secondary-a": "Navbar Active",
    "secondary-b": "Modal Headers",
    "secondary-c": "Foobar"
  };

  initializeApp = () => {
    this.setState({
      current_theme: this.DEFAULT_THEME,
      showCopyButton: true
    });
  };

  componentDidMount() {
    this.initializeApp();
  }

  updateCurrentTheme = (color, token) => {
    this.setState({
      current_theme: {
        ...this.state.current_theme,
        ...{ [token]: color }
      }
    });
  };

  onSuccess = () => {
    this.setState({ showCopyButton: false });
    setTimeout(() => this.setState({ showCopyButton: true }), 2000);
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Theme Generator</title>
        </Helmet>
        <Header>
          <span>Parsable Theme Generator</span>
        </Header>
        <Wrapper>
          <ShadeGroup>
            {this.state.current_theme ? (
              Object.keys(this.state.current_theme).map((index, value) => (
                <IndividualShade
                  token={index}
                  color={this.state.current_theme[index]}
                  supportedItems={this.SUPPORTED_ITEMS[index]}
                  updateCurrentTheme={this.updateCurrentTheme}
                />
              ))
            ) : (
              <p>No theme</p>
            )}
          </ShadeGroup>
          <CodeBlock>
            <Clipboard
              component="div"
              onSuccess={this.onSuccess}
              data-clipboard-text={JSON.stringify(
                this.state.current_theme,
                null,
                2
              )}
            >
              {this.state.showCopyButton ? (
                <CopyButton>Copy to Clipboard</CopyButton>
              ) : (
                <CopyButton disabled>Copied!</CopyButton>
              )}
            </Clipboard>
            <pre>{JSON.stringify(this.state.current_theme, null, 2)}</pre>
          </CodeBlock>
        </Wrapper>
        <Footer>
          <span>The easy way to build themes for Parsable </span>
          <a href="#" target="_blank">
            Confluence Page
          </a>
        </Footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
