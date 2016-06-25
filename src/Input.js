
import { hcss } from 'jsxcss'
import { alpha } from './util/colors'

const Input = ({
  type = 'text',
  name,
  label,
  value,
  oninput,
  hideLabel,
  big,
  ...props
}) => {
  const labelStyles = hideLabel ? {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)'
    } : {
      fontSize: 12
    }

  const paddingTop = big ? 12 : 4
  const paddingBottom = paddingTop

  const sx = {
    root: {
    },
    label: {
      ...labelStyles
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 1.375,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop,
      paddingBottom,
      margin: 0,
      backgroundColor: 'transparent',
      // backgroundColor: alpha('#07c', 1/32),
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      appearance: 'none',
      ...props.style,
      ':focus': {
        outline: 'none',
        color: '#07c',
        backgroundColor: alpha('#07c', 1/16),
      },
      ':disabled': {
        opacity: .5
      },
      ':read-only': {
        color: 'inherit',
        backgroundColor: alpha('#000', 1/32)
      },
      '::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      '::-webkit-outer-spin-button': {
        appearance: 'none'
      }
    }
  }

  return (
    <div style={sx.root}>
      <label htmlFor={name}
        style={sx.label}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        name={name}
        id={name}
        value={value}
        style={sx.input}
        oninput={oninput} />
    </div>
  )
}

export default Input

