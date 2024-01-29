import Box from "../Boxs";

interface Information {
    firstName:string;
    lastName:string;
    phone:string;
    job:string;
    company:string;
    location:Location;
    imageurl:string;
    banelImage:string;
}

interface Location {
    lat:number,
    lng:number
}

class User {
    public boxs:Array<Box> = []

    constructor(public information?:Information){}
    public resolveImageUrl() {
        if(this.information?.imageurl!= ''){
            return this.information?.imageurl
        }
        return `https://ui-avatars.com/api/?name=${this.information?.firstName}+${this.information?.lastName}`
    }

    public updateImageurl(base64Image:string|ArrayBuffer|null) {
        if(this.information){
            console.log('updated')
            this.information.imageurl= base64Image as string
            this.syncToLocalStorage()
        }
    }

    private syncToLocalStorage () {
        localStorage.setItem('authUser',JSON.stringify(new User(this.information)))
    }

    public addBox(newBox:Box) {
        this.boxs.push(newBox)
        this.syncToLocalStorage()
    }

    public setBox(newBoxs:Array<Box>){
        this.boxs = newBoxs
        this.syncToLocalStorage()
    }
} 
export default User