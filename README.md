# Chakra UI 2.8.2 w/React 19.1 Bug

## Getting Started

See `/src/page.tsx` for the bug reproduction.

The source of the error has been traced to `useStyleConfig` in Chakra's @chakra-ui/system:

#### Current Code in Button

```tsx
export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const group = useButtonGroup()
  const styles = useStyleConfig('Button', { ...group, ...props })

  // ....
}
```

#### Fix in Button

```tsx
export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const group = useButtonGroup()
  const styleProps = omit(props, ['rightIcon', 'leftIcon'])
  const styles = useStyleConfig('Button', { ...group, ...styleProps })

  // ....
}
```
