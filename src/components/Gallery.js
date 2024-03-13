import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {

    const display = myData.map((item, index) => {
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
