// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({
    groupPhoto: "https://ik.imagekit.io/ieeensakcet/tr:w-1700/csGroup",
    logo: "/assets/ieee-sps-logo.png",
    headerText:
      "The IEEE's first society, the Signal Processing Society is the world’s premier professional society for signal processing scientists and professionals since 1948. Signal processing is the enabling technology for the generation, transformation, and interpretation of information.",
    learnMoreLink: "https://signalprocessingsociety.org/",
    joinText:
      "We seek to contribute towards the fields of Signal processing by encouraging young minds through workshops, industrial trips and projects.",
    benefits: [
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/Voucher1_wx4csFdsiQ.png",
        text: "Discounts on registration to attend SPS conferences and workshops, including ICASSP and ICIP",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/Paper2_MICMkPfnC.png",
        text: "Unlimited access to select SPS publications through the Signal Processing Digital Library via IEEE Xplore®",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/Network3_LHcsxwJlyr.png",
        text: "Network with signal processing leaders, share research, and exchange ideas at SPS conferences and events",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/upload4__5hm5UADLx.png",
        text: "Upload to SigPort - an online repository of manuscripts, reports, technical white papers, theses, and supporting materials.s",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/Box6_njbMF6o_L.png",
        text: "Digital delivery of IEEE Signal Processing Magazine and the Content Gazette",
      },
      {
        src: "https://ik.imagekit.io/ieeensakcet/sps/ebook5_iNxynGyVb.png",
        text: "Get access to educational materials, including conference plenaries and tutorials, in the SPS Resource Center",
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
