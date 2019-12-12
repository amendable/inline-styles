# Inline styles

This resolver merges all the React props that match the names of styling props into the `style` object on the final DOM object.

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

It supports longer forms as described [here](https://github.com/amendable/spacing-aliases/blob/master/src/index.js#L3-L8).

The shorter form syntax thats supported is [here](https://github.com/amendable/spacing-aliases/blob/master/src/shortMiddleware.js).
