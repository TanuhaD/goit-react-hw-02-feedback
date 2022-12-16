import styled from 'styled-components';
import {
  color,
  typography,
  layout,
  space,
  shadow,
  border,
  flexbox,
} from 'styled-system';

export const Box = styled.div`
  margin: auto;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.main}px;
  background-color: ${p => p.theme.colors.gray};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  ${color}
  ${typography}
  ${layout}
  ${space}
  ${shadow}
  ${border}
  ${flexbox}
`;
