import deepmerge from 'deepmerge'

export const withStyle = style => diory => deepmerge({ style }, diory || {})
