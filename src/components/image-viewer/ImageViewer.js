import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

const classes = {
    "viewerRoot":{
        overflow: "hidden",
        margin: "2%",
        width: "96%"
    },
    "viewerImg":{
        overflow: "hidden",
        margin: "2%",
        width: "96%"
    },
    closeImg: {
        cursor:'pointer', 
        float:'right'
    }
}

function ImageViewer({open, imageUrl, title, user, onViewerClosed, classes}) {
  return (
    <div>
        <Dialog open={open} title="Close">
            <DialogTitle id="simple-dialog-title">
                <span>{title}</span>
                <IconButton className={classes.closeImg} onClick={onViewerClosed}>
                        <Close color="secondary" />
                </IconButton>
            </DialogTitle>
            <div className={classes.viewerRoot}>
                <img src={imageUrl} alt="" className={classes.viewerImg}/>
            </div>
        </Dialog>
    </div>
  )
}

export default withStyles(classes)(ImageViewer)