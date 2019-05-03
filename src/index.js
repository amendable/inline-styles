import propsAndStyle from './propsAndStyle';

const inlineProps = (options) => (originalProps) => {
  const { style, props } = propsAndStyle(originalProps);
  return { ...props, style };
}

export default inlineProps;
