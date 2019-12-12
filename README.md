# Inline styles

This resolvers merges all the React props that match the names of styling props into the `style` object on the final DOM object.

## Usage
```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      inlineStyles(),
    ]}
  >
    <Box color='white' backgroundColor='black'>
      Primary color
    </Box>
  </AmendableProvider>
)
```

## Supported props

It uses [inline-style-properties](https://github.com/amendable/inline-style-properties) underneath for prop matching.

Here are all the styling props it supports (it supports most): 
[Supported styling properties](https://github.com/amendable/inline-style-properties/blob/master/src/inlineProperties.json)
