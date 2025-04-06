import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", 
  {
    text: "Thing1",
    icon: "face-smile",
    link:  "/posts/cherry.md", 
  },

  {
    text: "Thing2",
    icon: "truck",
    prefix: "/posts/",
    children: [
      "banana.md",
      "kiwi.md",
      "peach.md",
      "pear.md",
      {text: "Thing3", icon: "bell", link: "strawberry.md"},
    ]
 
    
  }
  {
    text: "Thing4",
    icon: "face-smile",
    prefix: "/posts/",
    children: [
      {
        text: "Devider1",
        icon: "bell",
        children: [
          "dragonfruit.md",
          "tomato.md",
        ],
           
      


]);
