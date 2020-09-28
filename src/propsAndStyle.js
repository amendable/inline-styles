import { hasProperty } from '@amendable/inline-style-properties';

export default (originalProps, { includeVendor = true } = {}) => {
  const style = {};
  const props = {};

  Object.keys(originalProps).forEach(key => {
    const value = originalProps[key];

    if (hasProperty(key, { includeVendor })) {
      style[key] = value;
    } else if (key === 'style') {
      Object.assign(style, originalProps[key]);
    } else {
      props[key] = value;
    }
  });

  return { style, props };
}
