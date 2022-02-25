import { useState } from 'react'
import { Confirm } from '../components/Confirm'

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [callback, setCallback] = useState(() => () => {})

  const close = () => {
    setIsOpen(false)
  }

  const open = ({ title, text, callback }) => {
    setTitle(title)
    setText(text)
    setCallback(() => callback)
    setIsOpen(true)
  }

  const agree = () => {
    callback()
    close()
  }

  const dialog = <Confirm {...{ title, text, isOpen, agree, close }} />

  return [dialog, open]
}
