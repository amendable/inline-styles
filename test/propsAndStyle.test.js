import propsAndStyle from '../src/propsAndStyle'

it('returns correct props and style', () => {
  const { style, props } = propsAndStyle({ display: 'block', color: 'red', test: 'me' });
  expect(style).toEqual({ display: 'block', color: 'red' });
  expect(props).toEqual({ test: 'me' });
})

it('returns correct props and style when other style is specified last', () => {
  const { style, props } = propsAndStyle({ display: 'block', style: { display: 'none' } });
  expect(style).toEqual({ display: 'none' });
})

it('returns correct props and style when other style is specified first', () => {
  const { style, props } = propsAndStyle({ style: { display: 'none' }, display: 'block' });
  expect(style).toEqual({ display: 'block' });
})
