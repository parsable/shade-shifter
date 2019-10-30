import React from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import ColorPickerIcon from "./ColorPickerIcon";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto 60px;
  grid-column-gap: 3px;
  position: relative;
`;
const ChooseColorBtn = styled.button`
  border: none;
  background-color: #eaeaea;
  background: linear-gradient(#fff, #eaeaea);
  border-radius: 3px;
  border: 1px solid #ccc;
  font-weight: 500;
  height: 50px;
  padding: 14px;
  font-size: 15px;
  :hover {
    background: linear-gradient(#fafafa, #ddd);
    border-color: #aaa;
  }
`;
const SupportedItems = styled.div``;
const TokenName = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: #333;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: monospace;
  font-weight: 500;
  background-color: #ddd;
  border-radius: 2px;
`;
const ColorShade = styled.div`
  height: 50px;
  border-radius: 2px;
`;
const ColorPicker = styled.div`
  position: absolute;
  z-index: 10;
  top: 52px;
  right: 0;
`;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

class IndividualShade extends React.Component {
  state = {
    colorPickerIsVisible: false
  };

  toggleColorPicker = () => {
    this.setState({
      colorPickerIsVisible: !this.state.colorPickerIsVisible
    });
  };
  handleClose = () => {
    this.setState({
      colorPickerIsVisible: false
    });
  };
  handleChangeComplete = data => {
    this.props.updateCurrentTheme(data.hex, this.props.token);
  };
  render() {
    const { token, color } = this.props;
    return (
      <Wrapper>
        <TokenName>
          <span>{token}</span>
        </TokenName>
        <ColorShade style={{ backgroundColor: color }} />
        <ChooseColorBtn onClick={this.toggleColorPicker}>
          <ColorPickerIcon />
        </ChooseColorBtn>
        {this.state.colorPickerIsVisible ? (
          <ColorPicker>
            <Cover onClick={this.handleClose}></Cover>
            <ChromePicker
              disableAlpha
              color={this.props.color}
              onChange={this.handleChangeComplete}
            />
          </ColorPicker>
        ) : null}

        {/* <SupportedItems>{supportedItems}</SupportedItems> */}
      </Wrapper>
    );
  }
}

export default IndividualShade;
