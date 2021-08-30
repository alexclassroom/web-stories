/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  PatternPropType,
  generatePatternStyles,
  hasOpacity,
  hasGradient,
} from '@web-stories-wp/patterns';
import { Swatch, themeHelpers } from '@web-stories-wp/design-system';

const focusStyle = css`
  ${({ theme }) =>
    themeHelpers.focusableOutlineCSS(
      theme.colors.border.focus,
      theme.colors.bg.secondary
    )};
`;

const SwatchList = styled.div.attrs({
  role: 'listbox',
})`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledSwatch = styled(Swatch).attrs(({ isSelected }) => ({
  role: 'option',
  'aria-selected': isSelected,
}))`
  ${focusStyle};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border: 2px solid ${theme.colors.border.defaultActive};
    `}
`;

function getPatternAsString(pattern) {
  if (!pattern) {
    return '';
  }
  const styles = generatePatternStyles(pattern);
  return styles.backgroundColor || styles.backgroundImage;
}

function BasicColorList({
  color,
  colors,
  handleColorChange,
  allowsOpacity,
  allowsGradient,
  ...rest
}) {
  const colorAsBackground = getPatternAsString(color);

  return (
    <SwatchList {...rest}>
      {colors.map((pattern) => {
        const isTransparentAndInvalid = !allowsOpacity && hasOpacity(pattern);
        const isGradientAndInvalid = !allowsGradient && hasGradient(pattern);
        const isDisabled = isTransparentAndInvalid || isGradientAndInvalid;

        const patternAsBackground = getPatternAsString(pattern);
        const isSelected = colorAsBackground === patternAsBackground;
        return (
          <StyledSwatch
            key={patternAsBackground}
            onClick={() => handleColorChange(pattern)}
            pattern={pattern}
            isSelected={isSelected}
            isDisabled={isDisabled}
            title={patternAsBackground}
          />
        );
      })}
    </SwatchList>
  );
}

BasicColorList.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  allowsOpacity: PropTypes.bool,
  allowsGradient: PropTypes.bool,
  color: PatternPropType,
  colors: PropTypes.arrayOf(PatternPropType),
};

export default BasicColorList;
