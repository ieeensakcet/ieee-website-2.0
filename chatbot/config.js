import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import IconLink from "./components/IconLink/IconLink";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import List from "./components/List/List";

const config = {
  botName: "Nawab",
  initialMessages: [
    createChatBotMessage("Hi, I'm Nawab, your virtual assistant. How can I help you today?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#12679b",
    },
    chatButton: {
      backgroundColor: "#12679b",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Services",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Become a member",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Read about IEEE NSAKCET",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Know about the team",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "Societies",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Computer Society",
            url: "https://www.ieeensakcet.com/chapters/cs",
            id: 1,
          },
          {
            text: "Robotiics and Automation Society",
            url: "https://www.ieeensakcet.com/chapters/ras",
            id: 2,
          },
          {
            text: "Women In Engineering",
            url: "https://www.ieeensakcet.com/chapters/wie",
            id: 3,
          },
          {
            text: "Signal Processing Society",
            url: "https://www.ieeensakcet.com/chapters/sps",
            id: 4,
          },
          {
            text: "Circuits and System Society",
            url: "https://www.ieeensakcet.com/chapters/css",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "BecomeMember",
      widgetFunc: (props) => <IconLink {...props} />,
      props: {
        options: [
          {
            text: "Google Form Submission",
            url: "https://link to form",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "benefits",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Join Us page",
            url: "https://ieeensakcet.com/joionus",
            id: 1,
          },
          {
            text: "IEEE membership beneits",
            url: "https://ieee.org/membership/benefits/index.html",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "price",
      widgetFunc: (props) => <List {...props} />,
      props: {
        options: [
          {
            text: "IEEE + CS Membership - 1300rs ",
            id: 1,
          },
          {
            text: "IEEE + RAS Membership - 1400rs ",
            id: 2,
          },
          {
            text: "IEEE + WIE Membership - 1000rs ",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "Social",
      widgetFunc: (props) => <SocialIcons {...props} />,
    },
  ],
};

export default config;
