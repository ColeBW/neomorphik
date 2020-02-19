import styled from 'styled-components';
import variables from './variables.json'

export const Background = `
  background-color: ${variables['@background']};
`;

export const Neo = `
  background-color: ${variables['@primary']};
  border: none;
  padding: 10px;
  box-shadow: 6px 6px 10px -1px ${variables['@shadow']}, -6px -6px 10px -1px ${variables['@glare']};
  border-radius: 8px;
  position: relative;
`;

export const NeoButton = styled.button`
  ${Neo};
  cursor: pointer;
  height: 33px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const NeoDiv = styled.div`
  ${Neo};
`;

export const NeoSpan = styled.span`
  ${Neo};
`;

export const NeoInput = styled.input`
  ${Neo};
  margin: 5px;
`;

export const NeoTextArea = styled.textarea`
  ${Neo};
  margin: 5px;
`;

export const NeoSelect = styled.select`
  ${Neo};
  height: 33px;
  margin: 5px;
`;

// Inverted

export const NeoInverted = `
  background-color: ${variables['@primary']};
  border: none;
  padding: 10px;
  box-shadow: inset 6px 6px 10px -1px ${variables['@shadow']}, inset -6px -6px 10px -1px ${variables['@glare']};
  border-radius: 8px;
  position: relative;
`;

export const NeoButtonInverted = styled.button`
  ${NeoInverted};
  cursor: pointer;
  height: 33px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const NeoDivInverted = styled.div`
  ${NeoInverted};
`;

export const NeoSpanInverted = styled.span`
  ${NeoInverted};
`;

export const NeoInputInverted = styled.input`
  ${NeoInverted};
  margin: 5px;
`;

export const NeoTextAreaInverted = styled.textarea`
  ${NeoInverted};
  margin: 5px;
`;

export const NeoSelectInverted = styled.select`
  ${NeoInverted};
  height: 33px;
  margin: 5px;
`;

// Dark Theme

export const BackgroundDark = `
  background-color: ${variables['@background-dark']};
`;

export const NeoDark = `
  background-color: ${variables['@primary-dark']};
  border: none;
  padding: 10px;
  box-shadow: 6px 6px 10px -1px ${variables['@shadow-dark']}, -6px -6px 10px -1px ${variables['@glare-dark']};
  border-radius: 8px;
  position: relative;
`;

export const NeoButtonDark = styled.button`
  ${NeoDark};
  cursor: pointer;
  height: 33px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const NeoDivDark = styled.div`
  ${NeoDark};
`;

export const NeoSpanDark = styled.span`
  ${NeoDark};
`;

export const NeoInputDark = styled.input`
  ${NeoDark};
  margin: 5px;
`;

export const NeoTextAreaDark = styled.textarea`
  ${NeoDark};
  margin: 5px;
`;

export const NeoSelectDark = styled.select`
  ${NeoDark};
  height: 33px;
  margin: 5px;
`;

// Dark Inverted

export const NeoDarkInverted = `
  background-color: ${variables['@primary-dark']};
  border: none;
  padding: 10px;
  box-shadow: inset 6px 6px 10px -1px ${variables['@shadow-dark']}, inset -6px -6px 10px -1px ${variables['@glare-dark']};
  border-radius: 8px;
  position: relative;
`;

export const NeoButtonDarkInverted = styled.button`
  ${NeoDarkInverted};
  cursor: pointer;
  height: 33px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const NeoDivDarkInverted = styled.div`
  ${NeoDarkInverted};
`;

export const NeoSpanDarkInverted = styled.span`
  ${NeoDarkInverted};
`;

export const NeoInputDarkInverted = styled.input`
  ${NeoDarkInverted};
  margin: 5px;
`;

export const NeoTextAreaDarkInverted = styled.textarea`
  ${NeoDarkInverted};
  margin: 5px;
`;

export const NeoSelectDarkInverted = styled.select`
  ${NeoDarkInverted};
  height: 33px;
  margin: 5px;
`;
