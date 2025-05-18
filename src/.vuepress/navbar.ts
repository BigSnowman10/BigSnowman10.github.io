import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", 
  {
    text: "Thing1",
    icon: "face-smile",
    link:  "#"
  },
  {
    text: "Understanding Python",
    icon: "python",
    prefix: "/Python/",
    children: [
      "Python1.md",
      "Variables.md",
      "VirtualEnvironments.md",
      "#",
      {text: "Thing3", icon: "bell", link: "#"},
    ]
 
    
  },

  {
    text: "Thing4",
    icon: "face-smile",
    prefix: "/posts/",
    children: [
      {
        text:"Devider1",
        icon: "bell",
        prefix: "/posts/",
        children: [
          "#",
          "#",
          "#",
          "#",
        ]
      },
      {
        text:"Devider2",
        icon: "bell",
        prefix: "/posts/",
        children: [
          "#",
          "#",
          "#",
          "#",
        ]
      }
      
    ]
  }


]);
