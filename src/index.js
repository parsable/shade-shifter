import React from "react";
import ReactDOM from "react-dom";
import Switch from "react-switch";
import { Helmet } from "react-helmet";
import Clipboard from "react-clipboard.js";
import {
  PARSABLE_THEME,
  LUNAR_THEME,
  CRIMSON_THEME,
  EVERGREEN_THEME
} from "./themes";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ParsableLogo from "./ParsableLogo";

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
    copied: false,
    showInfo: false
  };

  SUPPORTED_ITEMS = {
    "custom-primary-a": {
      web: ["Sidebar Link Background", "Tab --active"],
      mobile: []
    },
    "custom-primary-b": {
      web: ["Sidebar Background", "Modal Header Background"],
      mobile: []
    },
    "custom-primary-c": {
      web: [],
      mobile: []
    },
    "custom-secondary-a": {
      web: [
        "Button Background",
        "Button Border",
        "Dropdown --Focused",
        "Pills",
        "Switch --On"
      ],
      mobile: []
    },
    "custom-secondary-b": {
      web: ["Sync Banner Background", "Issue Banner Background"],
      mobile: ["FAB Button Background"]
    },
    "custom-secondary-c": {
      web: ["Customer Name", "Sidebar Link Text", "Modal Header Text"],
      mobile: []
    }
  };

  DEFAULT_THEME = PARSABLE_THEME;

  DROPDOWN_OPTIONS = {
    Parsable: PARSABLE_THEME,
    Lunar: LUNAR_THEME,
    Crimson: CRIMSON_THEME,
    Evergreen: EVERGREEN_THEME
  };

  initializeApp = () => {
    this.setState({
      current_theme: this.DEFAULT_THEME,
      showCopyButton: true,
      showInfo: false
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
  _onSelect = event => {
    this.setState({
      current_theme: this.DROPDOWN_OPTIONS[event.value]
    });
  };

  handleSwitch = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Theme Generator</title>
        </Helmet>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <ParsableLogo />
            </span>
            <span>Parsable Theme Generator</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "14px" }}>Display Component Info</span>
            <Switch
              onChange={this.handleSwitch}
              showInfo={this.state.showInfo}
              checked={this.state.showInfo}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={38}
              onColor="#01ab5d"
            />
            <Dropdown
              className="dropdown"
              options={Object.keys(this.DROPDOWN_OPTIONS)}
              onChange={this._onSelect}
              value={this.DEFAULT_OPTION}
              placeholder="Load a pre-built theme"
            />
          </div>
        </Header>
        <Wrapper>
          <ShadeGroup>
            {this.state.current_theme ? (
              Object.keys(this.state.current_theme).map((index, value) => (
                <IndividualShade
                  token={index}
                  color={this.state.current_theme[index]}
                  updateCurrentTheme={this.updateCurrentTheme}
                  supportedItems={this.SUPPORTED_ITEMS[index]}
                  showInfo={this.state.showInfo}
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
              data-clipboard-text={JSON.stringify(this.state.current_theme)}
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
          <a
            href="https://parsable.atlassian.net/wiki/spaces/product/pages/712212666/White-labeling+and+Branding"
            target="_blank"
          >
            Confluence Page
          </a>
        </Footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
