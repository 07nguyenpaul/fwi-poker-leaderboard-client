import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';

export const AddPlayerForm = ({
  country,
  firstName,
  earnings,
  lastName,
  onChange,
  onEdit,
  open,
  onSubmit,
  playerID,
  toggleAddPlayerForm }) => (
  <Dialog
    open={open}
    onClose={toggleAddPlayerForm}
    aria-labelledby="form-dialog-title"
  >
  <DialogTitle id="form-dialog-title">Add Player</DialogTitle>
    <DialogContent>
    <DialogContentText>
      {`To add a player, please fill out form and use either a `}
      <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">two letter</a>
      {` or `}{<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">three letter</a>}
      {` country code`}
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="firstName"
      label="First Name"
      type="name"
      fullWidth
      value={firstName}
      onChange={e => onChange('firstName', e)}
      className="form-dialog--textfield__first-name"
    />
    <TextField
      autoFocus
      margin="dense"
      id="lastName"
      label="Last Name"
      type="name"
      fullWidth
      value={lastName}
      onChange={e => onChange('lastName', e)}
      className="form-dialog--textfield__last-name"
    />
    <TextField
      autoFocus
      margin="dense"
      id="earnings"
      label="Total Winnings Amount"
      type="name"
      fullWidth
      value={earnings}
      onChange={e => onChange('earnings', e)}
      className="form-dialog--textfield__earnings"
    />
    <TextField
      autoFocus
      margin="dense"
      id="country"
      label="Native Country"
      type="name"
      fullWidth
      value={country}
      onChange={e => onChange('country', e)}
      className="form-dialog--textfield__country"
    />
    </DialogContent>
    <DialogActions>
      <Button className="form-dialog--btn__cancel" onClick={toggleAddPlayerForm} color="primary">
        Cancel
      </Button>
      {playerID && firstName !== '' ?
        <Button className="form-dialog--btn__edit" onClick={onEdit} color="primary">
          Edit
        </Button>
        :
        <Button className="form-dialog--btn__save" onClick={onSubmit} color="primary">
          Save
        </Button>
      }
    </DialogActions>
  </Dialog>
)

export default AddPlayerForm;
