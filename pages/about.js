import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import styles from '../styles/About.module.css'
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

// import seminar from "../public/seminar.png";
// import hackathon from "../public/hackathon.png";
// import competition from "../public/competition.png";
// import network from "../public/network.png";
// import webinar from "../public/webinar.png";
// import workshops from "../public/workshop.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta name="description" content="IEEE NSAKCET About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

    <div className={styles.About}>
      <Paper elevation={10} sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        gap: '20px',
        marginBottom: '30px',
      }}>

         
       <Image
          src="https://ik.imagekit.io/ieeensakcet/tr:w-400/college_BKdkFH2fF.webp"
          layout='fill'
          alt="college"

        className={styles.About__about__image}
         
       />

        <div className={styles.About__about__text}>
          <Typography variant="h6">
            <span className={styles.About__about__text__header}>
              IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
              and Technology
            </span>{" "}
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography>
          {/* <Typography variant="h6">
            It is a student community that strives to inform, learn, entertain,
            and inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography> */}
        </div>
      </Paper>
      <Paper elevation={12} sx={{
             display: 'flex',
             flexDirection: 'column',
             gap: '20px',
             alignItems: 'center',
             justifyContent: 'center',
             padding: '20px',
             marginBottom: '20px',
      }}>
        <Typography
          variant="h4"
          sx={{        color: '#c21531',
          borderBottom: '2px solid #000',}}
        >
          OUR COMMUNITY
        </Typography>
        <Image
          src="https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg"
          layout='fill'
          alt="pyramid"
          loading="lazy"
          className={styles.About__ourCommunity__pyramid}
        />
        <div className={styles.About__ourCommunity__text}>
          <Typography variant="h6">
            IEEE has its community around the globe, with more than 420,000 IEEE
            members. The world map has been divided into 10 regions and we come
            under Region 10 (Asia and Pacific), we are located in India and
            belong to the IEEE India Council which acts as a consortium of 12
            IEEE Sections located in different states of the country. IEEE
            Hyderabad Section foresees the activities in Telangana and Andhra
            Pradesh, different IEEE organizational units come under the section
            which includes IEEE Student Branches of colleges and universities.
          </Typography>
        </div>
      </Paper>
      <section className={styles.About__WhatWeDo}>
        <Typography variant="h4" sx={{     color: '#fff'}}>
          WHAT WE DO
        </Typography>
        <Timeline align="left" sx={{        width: '100%',
        alignItems: 'center',}}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{      width: '250px',
        padding: '10px',}}>
                <Image src="/seminar.png" layout='fill' alt="seminars" />
                <Typography>Seminars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{        width: '250px',
        padding: '10px',}}>
                <Image src="/webinar.png" layout='fill' alt="webinars" loading="lazy" />
                <Typography>Webinars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{        width: '250px',
        padding: '10px',}}>
                <Image src="/workshop.png" layout='fill' alt="workshops" loading="lazy" />
                <Typography>Workshops</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{        width: '250px',
        padding: '10px',}}>
                <Image src="/competition.png" layout='fill' alt="competition" loading="lazy" />
                <Typography>Competitions</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{        width: '250px',
        padding: '10px',}}>
                <Image src="/hackathon.png" layout='fill' alt="hackathon" loading="lazy" />
                <Typography>Hackathons</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} sx={{        width: '250px',
        padding: '10px',}}>
                <Image src="/network.png" layout='fill' alt="network" loading="lazy" />
                <Typography>Help Build Network</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
      <Paper elevation={10} sx={{        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
        alignItems: 'center',
        gap: '20px',}}>
        <Typography variant="h4" sx={{        color: '#c21531',
        borderBottom: '2px solid #000',}}>
          HOW WE WORK
        </Typography>
        <Image
          src="https://ik.imagekit.io/ieeensakcet/tr:w-800/work_RmD9D29gs7.png"
          layout='fill'
          alt="work"
          loading="lazy"
          className={styles.About__Work__image}
        />
        <div>
          <Accordion sx={{        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
        margin: 'auto',}}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{      color: "#fff",}} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Executive Committee (ExCOM)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Comprises of faculty advisors and core student members who hold
                officer positions and maintain the workflow.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
        margin: 'auto',}}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{     color: "#fff",}} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Program Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for planning and execution of activities and events.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
        margin: 'auto',}}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{  color: "#fff",}} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Membership Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for recruiting new members, maintaining their data,
                funds management and coordinating with existing members.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
        margin: 'auto',}}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{  color: "#fff",}} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Social Media Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This committee consists of 3 teams: <br />
                1. Content Team - Responsible for generating content and
                deciding what goes up on our social media accounts and posters.{" "}
                <br />
                2. Design Team - Responsible for desiging the posters, flyers
                and social media posts. <br />
                3. Website Team - Manages Website and keep it updated
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>


    </main>

      <Footer />
    </div>
  )
}
