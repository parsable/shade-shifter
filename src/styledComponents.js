import Styled, { css } from "styled-components";

//---------------------------------------
// Scaffolding
//---------------------------------------

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  width: 900px;
  padding-top: 100px;
`;
export const Header = Styled.header`
  display: flex;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 600;
  padding: 15px;
  color: #333;
  margin-bottom: 30px;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
  span {
    display: inline-flex;
  }
  span:first-child {
    margin-right: 15px;
  }
`;
export const Content = Styled.div`
  flex-grow: 1;
`;
export const Footer = Styled.footer`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 15px;
  margin-top: 50px;
  border-top: 1px solid #ddd
  display: flex;
  flex-direction: row;
  color: #696969;
  a {
    margin-left: 15px;
  }
`;

export const ShadeGroup = Styled.div`
  display: grid;
  grid-row-gap: 3px;
  row-rule: 1px solid #aaa;
`;

export const CodeBlock = Styled.div`
  position: relative;
  font-family: monospace;
  background: #1d1d1d;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 16px;
  color: #3cf56c;
  margin-top: 30px;
`;

export const CopyButton = Styled.button`
  font-family: system-ui;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 2px;
  background: linear-gradient(#fff, #eaeaea);
  :hover {
    background: linear-gradient(#fafafa, #ddd);
  }
  :disabled {
    cursor: not-allowed;
    border: none;
    background: #333;
    color: #38D475;
  }
`;

//---------------------------------------
// Form
//---------------------------------------

export const InputSpacing = css`
  margin: 0 8px;
`;
export const InputStyles = css`
  font-family: monospace;
  padding: 5px 10px;
  border: 2px solid #000;
  font-size: 16px;
  flex-grow: 1;
`;
export const Select = Styled.select`
  ${InputSpacing}
  ${InputStyles}
  position: relative;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff;
  background-position-x: 90%;
  background-size: 12px;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const Input = Styled.input`
  ${InputSpacing}
  ${InputStyles}
`;
export const Button = Styled.button`
  ${InputSpacing}
  background: #fff;
  border: 2px solid #000;
  color: #000;
  padding: 10px 15px;
  font-size: 16px;
  font-family: monospace;
  flex-shrink: 0;
  :hover {
    background: black;
    color: white;
  }
`;
export const FormGroup = Styled.div`
  display:flex;
`;
