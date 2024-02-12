import { createHashRouter } from "react-router-dom";
import { Home, Login, Verification, Spinner, CreateAccount, Splash, Dev, Edit, EditAbout, Setting } from "../Pages";

import ContactPage from "../Pages/ContactPage";

import Presentations from "../Pages/Presentations";
import ProtectedRoute from "./ProtectedRoute";
import { Chat, ContactsView, Profile } from "../Components";
<<<<<<< HEAD
import { EditContactInfo, EditGallery, EditGoogleMap, EditLinks, EditSocials, EditVideos } from "../Pages/EditPages";
import { SettingAccount, SettingConnectedAccount, SettingSharing, SettingService, SettingPayment, SettingPrivacyPolicy,SettingTermsService ,SettingSupport } from "../Pages/SettingPages";

=======
import { EditAiSetting, EditContactInfo, EditGallery, EditGoogleMap, EditLinks, EditSocials, EditVideos } from "../Pages/EditPages";
>>>>>>> 76e37ce45ef9fd782ccac846bacdbff78f4ccc3f
import ChatPage from "../Pages/ChatPage";


const route = createHashRouter([
  {
    path: "/",
    element: <ProtectedRoute Component={Home} />,

    children: [
      {
        path: "/",
        element: <Profile theme="Carbon"></Profile>,
        children: [
          {
            path: "edit",
            element: <Edit></Edit>,
            children: [
              {
                path: "contact-info",
                element: <EditContactInfo></EditContactInfo>,
              },
              {
                path: "about",
                element: <EditAbout></EditAbout>,
              },
              {
                path: "links",
                element: <EditLinks></EditLinks>,
              },
              {
                path: "gallery",
                element: <EditGallery></EditGallery>,
              },
              {
                path: "socials",
                element: <EditSocials></EditSocials>,
              },
              {
                path: "googlemap",
                element: <EditGoogleMap></EditGoogleMap>,
              },
              {
                path: "ai-setting",
                element: <EditAiSetting></EditAiSetting>,
              },
              {
                path: "videos",
                element: <EditVideos></EditVideos>,
              },
            ],
          },
        ],
      },
      {
        path: "/contacts",
        element: <ContactsView theme="Carbon"></ContactsView>,
        children: [
          {
            path: ":contactId",
            element: <ContactPage />,
          },
        ],
      },
      {
        path: "/settings",
        element: <Setting></Setting>,
        children: [
          {
            path: "account",
            element: <SettingAccount></SettingAccount>,
          },
          {
            path: "connectedaccount",
            element: <SettingConnectedAccount></SettingConnectedAccount>,
          },
          {
            path: "sharing",
            element: <SettingSharing></SettingSharing>,
          },
          {
            path: "service",
            element: <SettingService></SettingService>,
          },
          {
            path: "payment",
            element: <SettingPayment></SettingPayment>,
          },
          {
            path: "privacypolicy",
            element: <SettingPrivacyPolicy></SettingPrivacyPolicy>,
          },
          {
            path: "termsservice",
            element: <SettingTermsService></SettingTermsService>,
          },
          {
            path: "support",
            element: <SettingSupport></SettingSupport>,
          },
        ],
        // children:[
        //   {
        //     path: ":contactId",
        //     element: <ContactPage />,
        //   },
        // ]
      },
      {
        path: "/chats",
        element: <Chat theme="Carbon" />,
        children: [
          {
            path: ":chatId",
            element: <ChatPage />,
          },
        ],
      },
    ],
    // element: <Home></Home>,
  },
  {
    path: "/dev",
    element: <Dev></Dev>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Verification",
    element: <Verification></Verification>,
  },
  {
    path: "/Spinner",
    element: <Spinner></Spinner>,
  },
  {
    path: "/register",
    element: <CreateAccount></CreateAccount>,
  },
  {
    path: "/splash",
    element: <Splash />,
  },
  // {
  //   path: "/contacts",
  //   element: <Contacts />,
  // },
  // {
  //   path: "/contacts/:contactId",
  //   element: <ContactPage />,
  // },
  {
    path: "/presentation",
    element: <Presentations />,
  },
]);

export default route;
