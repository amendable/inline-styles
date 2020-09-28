import propsAndStyle from './propsAndStyle';

const inlineProps = (options) => (originalProps) => {
  const { style, props } = propsAndStyle(originalProps, options);
  return { ...props, style };
}

export default inlineProps;
