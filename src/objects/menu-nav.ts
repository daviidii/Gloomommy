import { MenuProps } from "../types/MenuProps";

export const menu_nav: MenuProps[] = [
  {
    id: 1001,
    name: "home",
    link: "/",
    subLink: [],
  },
  {
    id: 1002,
    name: "about",
    link: "about",
    subLink: [
      { link: "about/our_philosophy", name: "our philosophy" },
      {
        link: "about/about_postpartum_depression",
        name: "postpartum depression",
      },
    ],
  },
  {
    id: 1003,
    name: "resources",
    link: "resources",
    subLink: [
      { link: "resources/articles", name: "articles" },
      { link: "resources/videos", name: "videos" },
      { link: "resources/webinars", name: "webinars" },
    ],
  },
  {
    id: 1004,
    name: "community",
    link: "/community",
    subLink: [{ link: "community/forums", name: "forums" }],
  },
];
