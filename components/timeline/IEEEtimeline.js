import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// New icone below

import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Icon } from "@mui/material";
import Image from "next/image";

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["timeline"])),
//     },
//   };
// }

const IEEEtimeline = () => {
  const { t } = useTranslation();
  // export default function CustomizedTimeline() {

  return (
    <div>
      <Timeline
        position="alternate"
        align="left"
        sx={{
          width: "100%",
          alignItems: "center",
          m: "auto",
          marginTop: "20px",
        }}
      >
        <TimelineItem sx={{ width: "110%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            April 20, 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "15px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "5px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {t("timeline:time1")}
            </Typography>
            <Typography>{t("timeline:time2")}</Typography>
            <Typography variant="body2" color="text.secondary">
              {t("timeline:time3")}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time4")} <br /> {t("timeline:time5")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time6")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action" fontSize="large">
              <EventAvailableOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time7")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <StarRateOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time8")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {t("timeline:time9")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("timeline:time10")}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time11")} <br /> {t("timeline:time12")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time13")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <EventAvailableOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time14")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <AttachMoneyOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time15")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="secondary">
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/wie/WIE_logo_white.png" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2021</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time16")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "orange" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/cs/IEEE_CS_logoicon.png" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 6, 2021</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time17")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#98012e" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/ras/RAS_ICON_white.png" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2021</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time18")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <EmojiEventsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {t("timeline:time19")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("timeline:time20")}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time21")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#fff" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/sps/SPS_Logo_Color_RGB.png" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2022</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time22")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#fff" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/cass/CAS-logo.png" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2022</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {t("timeline:time23")} <br />
            {t("timeline:time24")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ height: "10px", bgcolor: "secondary.main" }}
            />
            <TimelineDot color="secondary">
              <TimelineOutlinedIcon fontSize="large" />
            </TimelineDot>
            {/* <TimelineConnector sx={{ height: "20px" }} /> */}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "23px", px: 2, margin: "0px" }}>
            <Typography>{t("timeline:time25")}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default IEEEtimeline;
