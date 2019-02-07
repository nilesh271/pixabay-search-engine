import React, { Component } from 'react'
import GridList from "@material-ui/core/GridList";
import ImageTile from "./ImageTile";
import ImageViewer from "../image-viewer/ImageViewer";
import { connect } from 'react-redux'
import { toggleImageViewer } from "../../actions/search";

class ImageGrid extends Component {
    onZoomClick = (imageId, e) => {
        debugger
        this.props.dispatch(toggleImageViewer(true, imageId))
    }

    onViewerClosed = (e) => {
        debugger;
        this.props.dispatch(toggleImageViewer(false, ""))
    }
  
    render() {
        debugger;
        const viewerImageObj = this.props.viewer.open ? this.props.images.find((image) => {
            return image.id === this.props.viewer.imageId
        }, this) : {}
        return (
        <div>
            <GridList cols={4} id="image-grid">
                {
                    this.props.images.map((image) => {
                        return (
                            <ImageTile key={image.id} image={image} onZoomCLick={this.onZoomClick} />        
                        )
                    })
                }
            </GridList>
            <ImageViewer 
                open={this.props.viewer.open} 
                onViewerClosed={this.onViewerClosed} 
                imageUrl={viewerImageObj.largeImageURL}
                title={viewerImageObj.tags}
                user={viewerImageObj.user}
            />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.search.images,
        viewer: state.search.imageViewer
    }
}

export default connect(mapStateToProps)(ImageGrid)