import React from 'react'
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
// import { withStyles } from '@material-ui/core/styles';

function ImageTile({image, classes, onZoomCLick}) {
  return (
    <>    
        <GridListTile 
            key={image.id}
        >
            <img src={image.imageUrl} alt="" />
            <GridListTileBar 
                title={image.tag}
                subtitle={<span><strong>{image.tags}</strong> <br/><br/> by <strong>{image.user}</strong></span>} 
                actionIcon={
                    <IconButton onClick={onZoomCLick.bind(this, image.id)} >
                        <ZoomIn color="secondary" data-image-id={image.id}/>
                    </IconButton>
                }
            ></GridListTileBar>
        </GridListTile>
    </>
  )
}


// export default withStyles(classes)(ImageTile)
export default ImageTile