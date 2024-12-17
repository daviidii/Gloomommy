import { SocialLinkProps } from "../types/SocialLinkProps";

import {
  IoLogoFacebook,
  IoLogoTiktok,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLinkProps[] = [
  {
    name: "facebook",
    link: "https://www.facebook.com",
    icon: <IoLogoFacebook />,
  },
  { name: "youtube", link: "https://www.youtube.com", icon: <IoLogoYoutube /> },
  { name: "x", link: "https://ww.x.com", icon: <FaSquareXTwitter /> },
  { name: "tiktok", link: "https://www.tiktok.com", icon: <IoLogoTiktok /> },
  {
    name: "instagram",
    link: "https://www.instagram.com",
    icon: <IoLogoInstagram />,
  },
];
