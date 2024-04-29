/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useConstructor } from "../../../help";
import { Auth } from "../../../Api";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { BeatLoader, RingLoader } from "react-spinners";
import { Button } from "symphony-ui";
import CropperBox from "../../../Components/CropperBox";
import { AddAvatar } from "../../../Components/__Modal__";
import { BackIcon } from "../../../Components";
interface Avatars {
  photo: string;
  video: string;
  type: "Api" | "Local";
}
const initialValue = {
  avatar_pic_url: "",
  silent_video_avatar: "",
  PrifileImage: "",
};
const EditAvater: React.FC = () => {
  const [avatarList, setAvaterList] = useState<Array<Avatars>>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [avatarVideo, setAvatarVideo] = useState("");
  // const [selectedAvatar, setSelectedAvatar] = useState("");
  const [uploadedAvater,setUploadedAvater] = useState<Avatars>({
    photo:"",
    type:'Local',
    video:''
  });
  const [currentAvatar,setCurrentAvatr] = useState<Avatars>({
    photo:"",
    type:'Local',
    video:''
  })
  const [Cropper, setCropper] = useState("");
  const authContext = useAuth();
  const [addAvatar,setAddAvatar] =useState(false)
    const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
        console.log(values)
    },
  });
  const createAvatarVideo = (photo:string,replaceAvatar:Avatars) => {
      Auth.createAvatarVideo(photo).then((response) => {
          if(response.data == 'No face detected'){
            setIsLoading(false)
            toast.dismiss()
            formik.setFieldValue('silent_video_avatar',replaceAvatar.video)
            formik.setFieldValue('avatar_pic_url',replaceAvatar.photo)                  
          }else{
            formik.setFieldValue('avatar_pic_url',response.data.avatar_pic_link)
            setUploadedAvater({
              photo:response.data.avatar_pic_link,
              video:response.data.silent_video_link,
              type:'Api'
            })
            formik.setFieldValue('silent_video_avatar',response.data.silent_video_link)
            setIsLoading(false)
          }
      }).catch(() => {
        setIsLoading(false)
        toast.dismiss()
        formik.setFieldValue('silent_video_avatar',replaceAvatar.video)
        formik.setFieldValue('avatar_pic_url',replaceAvatar.photo)   
             
      })     
  }
  const context = useAuth()
  useConstructor(() => {
    setIsLoading(true)
    Auth.avatarList(authContext.varification?.googleJson.email ? {google_json:authContext.varification.googleJson}:{}).then(res => {
      if(res.data[res.data.length -1].video == ''){
        createAvatarVideo(res.data[res.data.length -1].photo,res.data[0])
        setAvaterList(res.data.filter((el:any) =>el.photo != res.data[res.data.length -1].photo))  
      }else{
        setAvaterList(res.data)
        setIsLoading(false)
        formik.setFieldValue('silent_video_avatar',context.currentUser.information?.silent_video_avatar)
        formik.setFieldValue('avatar_pic_url',context.currentUser.information?.imageurl)
      }     
    })
  })
  useEffect(() => {
    setCurrentAvatr({
      photo:"",
      type:"Api",
      video:""
    })
    setTimeout(() => {
      setCurrentAvatr({
        photo:formik.values.avatar_pic_url,
        type:'Api',
        video:formik.values.silent_video_avatar
      })      
    }, 300);
  },[formik.values.avatar_pic_url, formik.values.silent_video_avatar])
  return (
    <>
      <div className="absolute w-full hiddenScrollBar h-dvh overflow-scroll top-[0px] bg-white z-[15]">
        <div className="relative top-4">
          <BackIcon title="" theme="Carbon"></BackIcon>
        </div>        
        <div className="px-5 mt-[120px] hiddenScrollBar h-full">
          <div className="text-gray-700 text-center font-semibold text-base">
            Edit Your Avatar
          </div>

          <div className="mt-6 flex items-center justify-between">
            {currentAvatar.video.length > 0 && !isLoading ? (
              <>
                <div className="w-[90px] relative object-cover boxShadow-Gray borderBox-Gray  rounded-[6.76px]  border border-white">
                  <div className="absolute -right-1 -top-1 w-[14px] h-[14px] rounded-full flex items-center bg-green-500 justify-center">
                    <img src="./icons/Vector.svg" alt="" />
                  </div>
                  <img
                    className=" w-full rounded-[6.76px] h-full"
                    src={formik.values.avatar_pic_url}
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="w-10 h-10"
                    src="./icons/fi-rr-arrow-right.svg"
                    alt=""
                  />
                </div>

                <div className="w-[160px] h-[103px] overflow-hidden object-cover boxShadow-Gray borderBox-Gray rounded-[6.76px]  border border-white">
                  <video
                    id="dragAbleAi"
                    playsInline
                    style={{}}
                    width={"100%"}
                    preload="auto"
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source
                      id="videoPlayer"
                      src={formik.values.silent_video_avatar}
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              </>
            ) : 
              <>
                <div className="w-[90px] h-[57px] flex justify-center items-center relative object-cover boxShadow-Gray borderBox-Gray  rounded-[6.76px]  border border-white">
                  <RingLoader size={30}></RingLoader>
                </div>

                <div>
                  <img
                    className="w-10 h-10"
                    src="./icons/fi-rr-arrow-right.svg"
                    alt=""
                  />
                </div>

                <div className="w-[160px] h-[103px] flex justify-center items-center overflow-hidden object-cover boxShadow-Gray borderBox-Gray rounded-[6.76px]  border border-white">
                  <RingLoader></RingLoader>
                </div>
              </>            
            }
          </div>

          <div>
            <div className="text-[#374151] text-[14px] opacity-80 mt-8 text-justify">
              Upload image, or choose avatar, we will convert it to talking
              profile.{" "}
              <span
                onClick={() => {
                //   setshowGudie(true);
                }}
                className="text-[#06B6D4] cursor-pointer"
              >
                {" "}
                learn more{" "}
              </span>
            </div>
          </div>

          <div className="w-full gap-8 mt-5 grid grid-cols-4 grid-flow-row">
            <div
              className="w-full  relative boxShadow-Gray flex justify-center items-center cursor-pointer borderBox-Gray rounded-[12px] "
              onClick={() => {
                if(uploadedAvater.photo.length != 0){
                    // setAvatarVideo("")
                    setTimeout(() => {
                      // setAvatarVideo(uploadedAvater.video)
                      formik.setFieldValue("avatar_pic_url",uploadedAvater.photo);
                      formik.setFieldValue("silent_video_avatar",uploadedAvater.video);                      
                    }, 300);
                    // setSelectedAvatar(uploadedAvater.photo)
                }else{
                  setAddAvatar(true)

                }
              }}
            >
                <div onClick={() => {
                  setAddAvatar(true)
                }} className={`${
                    uploadedAvater.photo.length > 0 ? "absolute rounded-full w-[30px] h-[30px] bg-white flex justify-center items-center -right-1 -top-1" : ""
                  }`}>
                <img
                  className="w-[20px] h-[20px]"
                  src="./icons/gallery-add.svg"
                  alt=""
                />
              </div>
              {uploadedAvater.photo.length > 0 ? (
                <img className="w-full h-full rounded-[12px]" src={uploadedAvater.photo} alt="" />
              ) : undefined}

              {/* // */}
              {/* <input
                onChange={(res: any) => {
                  // setisLoading(true)
                  // getBase64(res.target.files[0],res.target.value)
                  setAvatarVideo("");
                  const reader = new FileReader();
                  reader.readAsDataURL(res.target.files[0]);
                  reader.onload = function () {
                    setCropper(reader.result as string);
                  };
                  reader.onerror = function (error) {
                    console.log("Error: ", error);
                  };

                  // setSelectedAvatar(res.target.files[0])
                  // formik.setFieldValue('avatar_pic_url',res.target.files[0])
                }}
                className={`Carbon-ImageUploader-uploader-input invisible`}
                type="file"
                accept="*"
              /> */}
              {/* // */}
            </div>
            {avatarList.map((el) => {
              return (
                <>
                  <div
                    onClick={() => {
                      // setSelectedAvatar(el.photo);
                      // setAvatarVideo("");
                      if (el.video == "") {
                        setIsLoading(true);
                        Auth.createAvatarVideo(el.photo as string).then(
                          (response) => {
                            formik.setFieldValue(
                              "avatar_pic_url",
                              response.data.avatar_pic_link
                            );
                            // setAvatarVideo(response.data.silent_video_link);
                            formik.setFieldValue(
                              "silent_video_avatar",
                              response.data.silent_video_link
                            );
                            setIsLoading(false);
                          }
                        );
                      } else {
                        formik.setFieldValue("avatar_pic_url", el.photo);
                        formik.setFieldValue("silent_video_avatar", el.video);
                      }
                      // Auth.createAvatarVideo(el).then((res) => {
                      //   setAvatarVideo(res.data)
                      //   formik.setFieldValue('silent_video_avatar',res.data)
                      // })
                    }}
                    className={`w-full ${
                      el.photo == formik.values.avatar_pic_url
                        ? "borderBox-primary"
                        : "borderBox-Gray "
                    } boxShadow-Gray  border-3 overflow-hidden flex justify-center items-center cursor-pointer  rounded-[12px] `}
                  >
                    {/* <img src="" alt="" /> */}
                    <img src={el.photo} className="w-full  h-full" alt="" />
                  </div>
                </>
              );
            })}
          </div>
            <div className="mt-8 mb-3 px-4">
            <Button
                disabled={formik.values.silent_video_avatar.length == 0}
                onClick={() =>{
                  Auth.updateProfilePic(formik.values.avatar_pic_url,formik.values.silent_video_avatar).then(() => {
                    context.currentUser.updateAvater(formik.values.avatar_pic_url,formik.values.silent_video_avatar)            
                  })
                }}
                theme="Carbon"
            >
                Save Change
            </Button>
            </div>
        </div>
        {isLoading ? (
          <>
            <div className="absolute z-50 w-full h-full left-0 top-0 flex justify-center items-center">
              <BeatLoader size={8} color="#FFFFFF"></BeatLoader>
            </div>
            <div className="absolute w-full z-[1200] h-full bg-black opacity-60 top-0 left-0"></div>
          </>
        ) : undefined}
        <CropperBox
          url={Cropper}
          onResolve={(resolve: string | ArrayBuffer | null) => {
            // shareUser.updateImageurl(resolve)
            //  formik.setFieldValue('PrifileImage',resolve)
            // setAvatarUrl('')
            setCropper("");
            // setSelectedAvatar(resolve as string);
            
            setIsLoading(true);
            Auth.createAvatarVideo(resolve as string).then((response) => {
            if(response.data == 'No face detected'){
              toast.warn(response.data )
              setIsLoading(false)
            }else{
              formik.setFieldValue(
                "avatar_pic_url",
                response.data.avatar_pic_link
              );
              setUploadedAvater({
                photo:response.data.avatar_pic_link as string,
                type:'Local',
                video:response.data.silent_video_link
              })
              // setAvatarVideo(response.data.silent_video_link);
              formik.setFieldValue(
                "silent_video_avatar",
                response.data.silent_video_link
              );
              setIsLoading(false);

            }              
            });
          }}
        ></CropperBox>
        <AddAvatar
          isCanRemove={uploadedAvater.photo.length>0}
          onRemove={() => {
            // setSelectedAvatar("")
            setUploadedAvater({
              photo:'',
              type:'Local',
              video:""
            })
            setAddAvatar(false)
            // setAvatarVideo("")
            formik.setFieldValue("avatar_pic_url","")
            formik.setFieldValue("silent_video_avatar","")
          }}
          name={"modal name"}
          value={"editeValue"}
          theme="Carbon"
          isOpen={addAvatar}
          onClose={() => {
            setAddAvatar(false);
          }}
          onComplete={(data:any) => {

                  // setAvatarVideo("");
                  const reader = new FileReader();
                  reader.readAsDataURL(data);
                  reader.onload = function () {
                    setCropper(reader.result as string);
                  };
                  reader.onerror = function (error) {
                    console.log("Error: ", error);
                  };
                  setAddAvatar(false)
          
          }}
          title="Link"
        ></AddAvatar>
      </div>
    </>
  );
};

export default EditAvater