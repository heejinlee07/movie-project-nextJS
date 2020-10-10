/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {
  MovieWrapper,
  MoviePoster,
  MovieDetail,
  MovieLike,
  MovieDownload,
  MovieRating,
  MovieSummary,
} from "./MovieModal.styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({
  detailMovie,
  isLoading,
  isOpen,
  setOpen,
}) {
  const {
    medium_cover_image,
    title_long,
    like_count,
    download_count,
    description_full,
    rating,
  } = detailMovie;

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog onClose={handleClose} open={isOpen}>
        {isLoading && <h1>Now Loading...</h1>}
        {!isLoading && (
          <>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {title_long}
            </DialogTitle>
            <DialogContent dividers>
              <MovieWrapper>
                <MoviePoster
                  src={medium_cover_image}
                  onError={(e) => {
                    e.target.src =
                      "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
                    e.target.style = "object-fit: cover";
                  }}
                />
                <MovieDetail>
                  <MovieLike>Like 👍 : {like_count}</MovieLike>
                  <MovieDownload>Download 💙 : {download_count}</MovieDownload>
                  <MovieRating> ★{rating}</MovieRating>
                  <Typography gutterBottom>
                    <MovieSummary>{description_full}</MovieSummary>
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
  );
}
