/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '../button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {
    MovieWrapper,
    MoviePoster,
    MovieDetail,
    MovieLike,
    MovieDownload,
    MovieRating,
    MovieSummary
} from './modal.styles'

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
})

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant='h6'>{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label='close'
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions)

export default function CustomizedDialogs({ detailMovie, isLoadging }) {
    console.log('target', detailMovie)

    const {
        medium_cover_image,
        title_long,
        like_count,
        download_count,
        description_full,
        rating
    } = detailMovie

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>modal</Button>
            <Dialog onClose={handleClose} open={open}>
                {isLoadging && <h1>Now Loading...</h1>}
                {!isLoadging && (
                    <>
                        <DialogTitle
                            id='customized-dialog-title'
                            onClose={handleClose}
                        >
                            {title_long}
                        </DialogTitle>
                        <DialogContent dividers>
                            <MovieWrapper>
                                <MoviePoster src={medium_cover_image} />
                                <MovieDetail>
                                    <MovieLike>
                                        Like 👍 : {like_count}
                                    </MovieLike>
                                    <MovieDownload>
                                        Download 💙 : {download_count}
                                    </MovieDownload>
                                    <MovieRating> ★{rating}</MovieRating>
                                    <Typography gutterBottom>
                                        <MovieSummary>
                                            {description_full}
                                        </MovieSummary>
                                    </Typography>
                                </MovieDetail>
                            </MovieWrapper>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>닫기</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    )
}
