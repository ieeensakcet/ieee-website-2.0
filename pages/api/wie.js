// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({
    groupPhoto: "https://ik.imagekit.io/ieeensakcet/tr:w-1700/WIE_copy_gtxHcaImz.JPG",
    logo: "/assets/ieee-wie-logo.png",
    headerText:
      "IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.",
    learnMoreLink: "https://wie.ieee.org/",
    joinText:
      "On a mission to encourage women engineers to lead and prosper in technical fields and nurture their diverse talents through distinguished events and activities",
    benefits: [
      {
        src: "/wie/email.png",
        text: "FEATURES OPPORTUNITIES TO NETWORK, VOLUNTEER, PARTICIPATE IN LOCAL AND GLOBAL WIE ACTIVITIES",
      },
      {
        src: "/wie/medal.png",
        text: "EEE PROGRAM RECOGNISES WIE MEMBERS AND GROUPS WHO HAVE MADE AN OUTSTANDING CONTRIBUTION",
      },
      {
        src: "/wie/tag.png",
        text: "DISCOUNTED REGISTRATIONS TO THE ANNUAL IEEE-WIE INTERNATIONAL LEADERSHIP CONFERENCES AND OTHER EVENTS.",
      },
      {
        src: "/wie/around.png",
        text: "IEEE PROVIDES GRANTS FOR IEEE-WIE MEMBERS TO ATTEND AND PRESENT AT SPONSORED CONFERENCES AND EVENTS",
      },
      {
        src: "/wie/help.png",
        text: "GET INVOLVED LOCALLY WITH AN IEEE-WIE AFFINITY GROUP DISCOVER AND CONNECT WITH YOUR PEERS Volunteer",
      },
      {
        src: "/wie/scholarship.png",
        text: "IEEE IS PLEASED TO OFFER PRE-UNIVERSITY, UNDERGRADUATE AND GRADUATE STUDENTS SCHOLARSHIPS.",
      },
    ],
    advisor: {
      name: "Ms. Firdous Rehana",
      email: "https://www.linkedin.com/in/firdous-rehana-55ba3a23/",
      linkedin: "https://www.linkedin.com/in/firdous-rehana-55ba3a23/",
      image:
        "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/rehana_mam.png",
    },
    advisorMsg:
      "In the context of Engineering, women play an essential role. When women are empowered with access to equal rights and opportunities, it results in the improvement of prospects for present and future generations. I believe that IEEE WIE is a community that greatly understands and promotes women&#39;s empowerment in the fields of STEM and all women should be part of it.",
  });
}
