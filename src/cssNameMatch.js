import { all as cssProperties } from 'known-css-properties'
import camelCaseCss from 'camelcase-css'

export default (key) => cssProperties.find(prop => camelCaseCss(prop) === key);
