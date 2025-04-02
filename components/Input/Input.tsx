import styles from './Input.module.scss'
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  ComponentProps,
} from 'react'

type DivProps = ComponentProps<'div'>

interface Props extends DivProps {
  text: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  id: string
  name?: string
  type: 'text' | 'email' | 'password'
  onChange?: () => any
  additionalClass?: string
  isTextarea?: boolean
  maxLength?: number
}

const InputText = ({
  text,
  value,
  setValue,
  id,
  name,
  type,
  onChange,
  additionalClass = '',
  isTextarea = false,
  maxLength = 500,
  ...props
}: Props) => {
  const [open, setOpen] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  const inputRef = useRef(null)
  useEffect(() => {
    if (value != '' && !hasClicked) {
      setOpen(true)
    }
  }, [value, hasClicked])

  useEffect(() => {
    if (value == '') {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [value])

  return (
    <div
      tabIndex={-1}
      onFocus={() => {
        setHasClicked(true)
        setOpen(true)
        if (inputRef.current != null) {
          ;(inputRef.current as any).focus()
        }
      }}
      onBlur={() => {
        if (value == '') {
          setOpen(false)
        }
      }}
      className={styles.input}
      extra-css={additionalClass}
      {...props}
    >
      <label
        className={`${styles.input_label} ${open && styles.open} ${
          isTextarea && styles.input_label_textarea
        }`}
        htmlFor={id}
      >
        {text}
      </label>
      {!isTextarea && (
        <input
          ref={inputRef}
          value={value}
          required={true}
          onChange={(e) => {
            setValue(e.target.value)
            if (onChange) onChange()
          }}
          type={type}
          name={name}
          id={id}
          maxLength={maxLength}
        />
      )}
      {isTextarea && (
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (onChange) onChange()
          }}
          maxLength={maxLength}
          name={name}
          required={true}
          id={id}
        />
      )}
    </div>
  )
}

export default InputText
