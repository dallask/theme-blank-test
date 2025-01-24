const StyleDictionary = require('style-dictionary').extend('./tokens/tokens.config.json');
// these are the tokens we have in our stylesheet
const DESIGN_TOKEN_TYPES = [
  { type: 'fontSizes', category: 'Font Size', presenter: 'FontSize' },
  { type: 'fontFamilies', category: 'Font Family', presenter: 'FontFamily' },
  { type: 'fontWeights', category: 'Font Weight', presenter: 'FontWeight' },
  { type: 'lineHeights', category: 'Line Height', presenter: 'LineHeight' },
  { type: 'paragraphSpacing', category: 'Spacing', presenter: 'Spacing' },
  { type: 'letterSpacing', category: 'Letter Spacing', presenter: 'LetterSpacing' },
  { type: 'color', category: 'Color', presenter: 'Color' },
  { type: 'textCase', category: 'Text Case', presenter: 'Color' },
  { type: 'textDecoration', category: 'Text Decoration', presenter: 'Color' },
  { type: 'borderRadius', category: 'Border Radius', presenter: 'BorderRadius' },
  { type: 'borderWidth', category: 'Border Width', presenter: 'Border' },
  { type: 'opacity', category: 'Opacity', presenter: 'Opacity' },
  { type: 'spacing', category: 'spacing', presenter: 'Spacing' },
  { type: 'sizing', category: 'Sizing', presenter: 'Spacing' },
  { type: 'dimension', category: 'Dimension', presenter: 'Spacing' },
  { type: 'boxShadow', category: 'Shadow', presenter: 'Shadow' },
];

// Register your own format
StyleDictionary.registerFormat({
  name: 'customFormat',
  formatter({ dictionary, file }) {
    return (
      `${StyleDictionary.formatHelpers.fileHeader({ file })
      }:root {\n${
        DESIGN_TOKEN_TYPES.map(
          (item) => `\n/**
* @tokens ${item.category}
* @presenter ${item.presenter}
*/\n${
      dictionary.allTokens
        .filter(
          (token) => item.type === token.type,
        )
        .map((token) => `--${token.name}: ${token.value};`)
        .join('\n')}`,
        ).join('\n')
      }\n}\n`
    );
  },
});

StyleDictionary.registerFormat({
  name: 'customHeader',
  formatter({ dictionary, file }) {
    return (
      `${StyleDictionary.formatHelpers.fileHeader({ file })
      }:root {\n${
        `\n/**
* @tokens Other
* @presenter Color
*/\n${
      dictionary.allTokens
        .map((token) => `--${token.name}: ${token.value};`)
        .join('\n')}`
      }\n}\n`
    );
  },
});

const pixelsToRem = (px, units = 'rem') => {
  const rem = 16;
  return px === 0 ? 0 : `${px / rem}${units}`;
};

const percentsToEm = (percent, units = 'em') => {
  const percentValue = percent === 0 ? percent : percent.replace('%', '');
  return percentValue === 0 ? 0 : `${percentValue / 100}${units}`;
};

const appendPX = (value) => `${value}px`;

StyleDictionary.registerFilter({
  name: 'excludeTokens',
  matcher(token) {
    const filteredAttr = [
      'border',
    ];

    return !filteredAttr.includes(token.attributes.category);
  },
});

StyleDictionary.registerTransform({
  name: 'toRem/pxToRem',
  type: 'value',
  matcher(token) {
    return (
      (token.type === 'dimension'
            || token.type === 'fontSizes'
            || token.type === 'paragraphSpacing'
            || token.type === 'sizing'
            || token.type === 'spacing'
            || token.type === 'borderRadius'
            || token.type === 'container'
            || token.path[0] === 'fontSize') && token.attributes.type !== 'multi-value' && token.path[0] !== 'breakpoint' && token.path[0] !== 'badge'
    );
  },
  transformer(token) {
    return pixelsToRem(token.value);
  },
});

StyleDictionary.registerTransform({
  name: 'toEm/pxToEm',
  type: 'value',
  matcher(token) {
    return (
      (token.path[0] === 'breakpoint' || token.path[0] === 'badge') &&
      token.attributes.type !== 'multi-value'
    );
  },
  transformer(token) {
    return pixelsToRem(token.value, 'em');
  },
});

StyleDictionary.registerTransform({
  name: 'toRem/appendRem',
  type: 'value',
  matcher(token) {
    return (
      token.attributes.type === 'multi-value'
    );
  },
  transformer(token) {
    const a = token.value.split(' ');

    const b = a.map((a) => (
      pixelsToRem(a)
    ));

    return b.join(' ');
  },
});

StyleDictionary.registerTransform({
  name: 'toPX/appendPX',
  type: 'value',
  matcher(token) {
    return token.type === 'borderWidth' && token.attributes.type !== 'multi-value';
  },
  transformer(token) {
    return appendPX(token.value);
  },
});

// Figma utilizes percents for the letter-spacing values.
StyleDictionary.registerTransform({
  name: 'toEm',
  type: 'value',
  matcher(token) {
    return token.type === 'letterSpacing';
  },
  transformer(token) {
    return percentsToEm(token.value);
  },
});

/**
 * Based on: https://github.com/six7/figma-tokens/issues/379#issuecomment-1116953915
 */
StyleDictionary.registerTransform({
  name: "shadow/css",
  type: "value",
  transitive: true, // Necessary when the color is an alias reference, or the shadows themselves are aliased
  matcher: (token) => token.type === "boxShadow",
  transformer: (token) => {
    // Allow both single and multi shadow tokens:
    const shadows = Array.isArray(token.value) ? token.value : [token.value];

    const transformedShadows = shadows.map((shadow) => {
      const { x, y, blur, spread, color, type } = shadow;
      const inset = type === "innerShadow" ? "inset " : "";
      return `${inset}${pixelsToRem(x)} ${pixelsToRem(y)} ${pixelsToRem(blur)} ${pixelsToRem(spread)} ${color}`;
    });

    return transformedShadows.join(", ");
  },
});

StyleDictionary.buildAllPlatforms();
