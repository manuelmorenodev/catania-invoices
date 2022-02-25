import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export const Confirm = ({ isOpen, close, title, text, agree }) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {text && (
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={close}>Cancelar</Button>
        <Button onClick={agree} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
