// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({
    groupPhoto: "https://ik.imagekit.io/ieeensakcet/tr:w-1700/csGroup",
    logo: "/assets/ieee-cs-logo.png",
    headerText:
      "IEEE Computer Society is a professional society of IEEE. Its purpose and scope is “to advance the theory, practice, and application of computer and information processing science and technology” and the “professional standing of its members",
    learnMoreLink: "https://www.computer.org/",
    joinText:
      "Our goal is to encourage involvement, and provide opportunities for students to build valuable skills.",
    benefits: [
      {
        src: "/cs/mags.webp",
        text: "Computer Magazine, our flagship publication (12 digital issues)",
      },
      {
        src: "/cs/library.webp",
        text: "Computer Society Digital Library",
      },
      {
        src: "/cs/price.webp",
        text: "Member pricing on optional magazines and transactions",
      },
      {
        src: "/cs/contacts.webp",
        text: "Make professional contacts",
      },
      {
        src: "/cs/community.webp",
        text: "Access more than 40 technical communities.",
      },
      {
        src: "/cs/library.webp",
        text: "Online professional programs with certifiaction for all.",
      },
    ],
    advisor: {
      name: "Mrs. Asma Mehdia",
      email: "https://www.linkedin.com/in/asma-mehdia-7565151b4/",
      linkedin: "https://www.linkedin.com/in/asma-mehdia-7565151b4/",
      image:
        "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/asma_mam_tbqioU5dh.png",
    },
    advisorMsg:
      "Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of CS, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you.",
  });
}
