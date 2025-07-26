import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Button, Divider, IconButton, Typography} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '24px',
};

interface Props {
  children?: React.ReactNode;
  open: boolean;
  close: () => void;
  label: string;
}

export default function PopupModal({children, open, close, label}: Props) {
  return (
    <Modal
      aria-labelledby='spring-modal-title'
      aria-describedby='spring-modal-description'
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{backdrop: Backdrop}}>
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            ml: 1,
            mt: 1,
          }}>
          <Typography sx={{fontSize: '24px'}}>{label}</Typography>

          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{mb: 2}} />
        <Box sx={{width: '100%'}}>{children}</Box>
      </Box>
    </Modal>
  );
}
