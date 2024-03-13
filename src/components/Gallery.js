import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem d={d} key={i} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
