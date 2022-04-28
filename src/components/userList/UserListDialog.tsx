import React, {memo, VFC, useState} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { pink, grey } from "@mui/material/colors";


const ContainerDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),

  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),

  },
}));

export interface DialogProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const TopDialogTitle = (props: DialogProps) => {
  const { children, onClose} = props;

  return (
    <DialogTitle sx={{ ml: 3, p: 2 , fontSize: 15, fontWeight: 'bold', color: grey[500], }} >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


export const UserListDialog: VFC = memo(() => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" sx={{fontSize: 15, fontWeight: 'bold', color: pink[100]}} onClick={handleClickOpen} >続きを見る</Button>
      <ContainerDialog
        onClose={handleClose}
        aria-labelledby="dialog-title"
        open={open}
        fullWidth
      >
        <TopDialogTitle id="dialog-title" onClose={handleClose} >
          登録情報
        </TopDialogTitle>
        {/* 線を引く */}
        <DialogContent dividers sx={{textAlign: 'center'}}>
          <Typography gutterBottom>
           ここに名前
          </Typography>
          <Typography gutterBottom>
            性別
          </Typography>
          <Typography gutterBottom>
            住所
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button size="small" sx={{fontSize: 15, fontWeight: 'bold', color: pink[100]}} onClick={handleClose} >閉じる</Button>
        </DialogActions>
      </ContainerDialog>
    </div>
  );
})
