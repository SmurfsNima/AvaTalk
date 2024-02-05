import { Box } from ".."
import ImageGallery from "react-image-gallery";
interface galleryImage {
    original:string
    thumbnail:string
}

class GalleryBox extends Box{
    
    constructor(protected title:string,protected contents:Array<galleryImage>){
        super(title)
        this.typeName = 'GalleryBox'
    }
    public resolveRender(theme: string): JSX.Element {
        return (
            <div className={`${theme}-Profile-Vectors justify-center relative`}>
                <ImageGallery items={this.contents} />                
            </div>            
        )
    }
}

export default GalleryBox
