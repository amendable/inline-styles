import cssNameMatch from './cssNameMatch';

const propsAndStyle = (originalProps) => {
  const style = {};
  const props = {};

  Object.keys(originalProps).forEach(key => {
    const value = originalProps[key];

    if (cssNameMatch(key)) {
      style[key] = value;
    } else {
      props[key] = value;
    }
  });

  return { style, props };
}

export default propsAndStyle;
