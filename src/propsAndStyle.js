import { hasProperty } from '@amendable/inline-style-properties';

const propsAndStyle = (originalProps, { exclude = [], includeVendor = true } = {}) => {
  const style = {};
  const props = {};

  Object.keys(originalProps).forEach(key => {
    const value = originalProps[key];

    if (!exclude.includes(key) && hasProperty(key, { includeVendor })) {
      style[key] = value;
    } else if (key === 'style') {
      Object.assign(style, originalProps[key]);
    } else {
      props[key] = value;
    }
  });

  return { style, props };
}

export default propsAndStyle;
