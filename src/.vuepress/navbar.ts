import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Coding",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Ones",
        icon: "pen-to-square",
        prefix: "TheOnes/",
        children: [
          { text: "TheFirst", icon: "pen-to-square", link: "1" },
          { text: "TheSecond", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "More",
        icon: "pen-to-square",
        prefix: "more-ones/",
        children: [
          {
            text: "TheMore",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "TheEcenMore",
            icon: "pen-to-square",
            link: "2",
          },  
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "About",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
