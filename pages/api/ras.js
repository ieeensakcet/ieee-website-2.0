// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({
    groupPhoto: "https://ik.imagekit.io/ieeensakcet/tr:w-1700/rasGroup_JtDGVXZhx",
    logo: "/assets/ieee-ras-logo.png",
    headerText:
      "The IEEE Robotics and Automation Society (IEEE RAS) is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.",
    learnMoreLink: "https://www.ieee-ras.org/",
    joinText:
      "We strive to promote the fields of robotics and automation as a career and bring awareness and growth among the members of our society through curated events and activities.",
    benefits: [
      {
        src: "/ras/speak.png",
        text: "Access to exclusive magazines, transactions and journalsS",
      },
      {
        src: "/ras/research.png",
        text: "Get involved with 44 technical co​mittees to work on similar goals",
      },
      {
        src: "/ras/discount.png",
        text: "Get discounts on RAS events and publications",
      },
      {
        src: "/ras/award.png",
        text: "Get recognized for your outstanding work and efforts",
      },
      {
        src: "/ras/resource.png",
        text: "Access to highly valued technical resource",
      },
      {
        src: "/ras/volunteer.png",
        text: "Participate in organising events and activities",
      },
    ],
    advisor: {
      name: "Ms. Shanila Mahreen",
      email: "https://www.linkedin.com/in/firdous-rehana-55ba3a23/",
      linkedin: "https://www.linkedin.com/in/firdous-rehana-55ba3a23/",
      image:
        "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/shanila_mam.jpeg",
    },
    advisorMsg:
      "We are in an era where the extent of development relies on machines. Today, organizations with the help of robotics and automation can fulfil their targets in less time with greater output. Indeed this has been made possible with the innovations in the fields of robotics and automation. IEEE RAS is a community that is striving to the needs of the hour and is creating a major impact in the fields of robotics and automation to cater for the needs of humanity. As an advisor to the IEEE RAS chapter in our college, I wish to extend the opportunities and benefits to the students and faculty members of our institution.",
  });
}
