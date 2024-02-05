import { useState } from "react";
import { Button } from "symphony-ui";
import { Card } from "..";
import { Outlet, useNavigate } from "react-router-dom";

interface EditProps {
  theme?: string;
}

const Edit: React.FC<EditProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [editCards] = useState([
    {
      name: "Contact Info",
      icon: "book.svg",
      link: "contact-info",
      description: "Add the contact info you’d like to share others.",
    },
    {
      name: "About",
      icon: "info.svg",
      link: "about",
      description: "Share something about yourself.",
    },
    {
      name: "Gallery",
      icon: "gallery.svg",
      link: "gallery",
      description: "Add images to your profile.",
    },
    {
      name: "Socials",
      icon: "social.svg",
      link: "socials",
      description: "Share your social media profiles.",
    },
    {
      name: "Links",
      icon: "link.svg",
      link: "links",
      description: "Add websites to your profile.",
    },
    {
      name: "Google Map",
      icon: "location2.svg",
      link: "googlemap",
      description: "Share a store or office location.",
    },
    {
      name: "Al Setting",
      icon: "lsetting.svg",
      link: "share",
      description: "Share a store or office location.",
    },
    {
      name: "Videos",
      icon: "video-play.svg",
      link: "videos",
      description: "Make your page come to life with a video.",
    },
  ]);
  return (
    <>
      <div className={`${theme}-Edit-container`}>
        <Outlet></Outlet>
        <div className="flex px-6 items-center space-x-4 absolute  top-8">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            theme={`${theme}-back`}
          >
            <div className={`${theme}-back-Button-vector`}></div>
          </Button>
          <p className={`${theme}-Edit-title`}>Edit Profile</p>
        </div>

        <div className="px-6 mt-[96px] hiddenScrollBar h-[-webkit-fill-available] overflow-y-scroll pb-[300px] pt-[32px]">
          {editCards.map((item) => {
            return <Card linkTo={item.link} content={item} theme="Carbon"></Card>;
          })}
        </div>
      </div>
    </>
  );
};
export default Edit;
