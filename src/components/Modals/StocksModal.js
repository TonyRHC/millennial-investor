import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme) => ({
    button: {
        float: 'right',
        marginTop:  -70,
        width: 100, 
    },
}));

const ColorButton = withStyles(() => ({
    root: {
      color: '#ffffff',
      backgroundColor: '#469a76',
      '&:hover': {
        backgroundColor: '#227338',
      },
    },
}))(Button);

const StocksModal = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = () => {
        setOpen(false);
        props.handleSubmit(text);
    }
    

    return (
        <div>
            <ColorButton onClick={handleClickOpen} className={classes.button}>
            +
            </ColorButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Stock Ticker"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StocksModal;