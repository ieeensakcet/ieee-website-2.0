// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({
    groupPhoto: "https://ik.imagekit.io/ieeensakcet/tr:w-1700/csGroup",
    logo: "/assets/ieee-cas-logo.png",
    headerText:
      "The IEEE Circuits and Systems Society is the leading organization that promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems.",
    learnMoreLink: "https://ieee-cas.org/",
    joinText:
      "Our motive is to promote the fields of circuit and system as a career and bring awareness and growth among the members of our society through curated events and activities.",
    benefits: [
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/Library1_YVvZK3EcA.png",
        text: "Electronic access to the IEEE Circuits and Systems Society Digital Library which features access to all CASS fully owned publication issues",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/technical2_jMhgAz-hG.png",
        text: " Join one of our 14 Technical Committees which promote technical activities in various topical areas and offer additional opportunities",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/warehouse3_scoC6Mcau.png",
        text: " A myriad of networking resources are available from ISCAS and other conferences to regional chapter events.",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/news4_pUaLUgrak.png",
        text: "Free access to the CAS Society Newsletter to stay current on industry and society news.",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/discount5_IlrorqhdK.png",
        text: "Discount for conference registration fee and free electronic access to proceedings of CAS conferences",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/cass/database6_KaZ2rNdek.png",
        text: "Get free subscription to IEEE DataPort, which provides access to all IEEE DataPort Datasets.",
      },
    ],
    advisor: {
      name: "Mrs. Rahmath Unnisa",
      email: "https://www.linkedin.com/in/asma-mehdia-7565151b4/",
      linkedin: "https://www.linkedin.com/in/asma-mehdia-7565151b4/",
      image:
        "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/asma_mam_tbqioU5dh.png",
    },
    advisorMsg:
      "We are in an era where the extent of development relies on machines. Today, organizations with the help of robotics and automation can fulfil their targets in less time with greater output. Indeed this has been made possible with the innovations in the fields of robotics and automation. IEEE RAS is a community that is striving to the needs of the hour and is creating a major impact in the fields of robotics and automation to cater for the needs of humanity. As an advisor to the IEEE RAS chapter in our college, I wish to extend the opportunities and benefits to the students and faculty members of our institution.",
  });
}
