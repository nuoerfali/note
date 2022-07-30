import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" , activeMatch: "^/guide/$",},
  {
    text: "java", icon: "creative",prefix: "/java/",
    children: [
      {
        text: "java基础",
        icon: "edit",
        activeMatch: "^/java/$",
        children: [
          { text: "基本语法",  link: "1.基本语法" },
          { text: "面向对象",  link: "2.面向对象" },
          { text: "异常处理",  link: "3.异常处理" },
          { text: "多线程",  link: "4.多线程" },
          { text: "Java常用类",  link: "5.Java常用类" },
          { text: "枚举类&注解",  link: "6.枚举类&注解" },
          { text: "Java集合",  link: "7.Java集合" },
          { text: "泛型",  link: "8.泛型" },
          { text: "IO流",  link: "9.IO流" },
          { text: "网络编程",  link: "10.网络编程" },
          { text: "反射",  link: "11.反射" },
          { text: "jdk8新特性",  link: "12.jdk8新特性" },
        ],
      },
    ]
  },
  {
    text: "工具｜部署",prefix: "/devTool/",
    children: [
      {
        text: "linux系统",
        prefix: "linux/",
        children: [
          { text: "linux基础介绍",  link: "linux基础介绍" },
          { text: "linux用户、权限、进程",  link: "linux用户、权限、进程" },
          { text: "linux常用命令",  link: "linux常用命令" },
        ],
      },
      {
        text: "Git",
        prefix: "git/",
        children: [
          { text: "git介绍",  link: "Git介绍" },
          { text: "git实操",  link: "Git实操" },
        ],
      },
      {
        text: "Docker",
        prefix: "docker/",
        children: [
          { text: "docker介绍",  link: "docker介绍" },
        ],
      },
    ]
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);