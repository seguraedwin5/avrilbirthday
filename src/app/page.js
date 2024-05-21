"use client";
import styles from "./page.module.css";
import { Container, Box, Grid } from "@mui/material";
import Logowa from "./assets/whatsapp.svg";
import { useState } from "react";
import Carousel from "./components/Carousel";
import Image from "next/image";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
export default function Home() {
  return (
    <Container
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"flex-start"}
        alignItems={"center"}
        height={"100vh"}
        width={"100%"}
        gap={4}
      >
        <h1>Mi Primer Añito</h1>
        <p
          style={{ color: "black", alignSelf: "center", justifySelf: "center" }}
        >
          Hola mis papitos y yo queremos invitarte a la celebración de mi
          cumpleaños
        </p>
        <Box className={styles.section_container}>
          <h1 style={{ textAlign: "center" }}>Invitacion</h1>
          <video
            src="/videos/video_invitacion.mp4"
            width={350}
            height={600}
            controls={true}
          ></video>
        </Box>
        <Box>
          <div
            style={{
              backgroundImage: "url('/images/invitacion.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "100% 100%",
              height: "100vh",
              width: "100vw",
              backgroundAttachment: "scroll",
            }}
          ></div>
        </Box>
        <Box>{/*<Formulario></Formulario>*/}</Box>
        <Box>
          <div className={styles.button}>
            <Image src={Logowa} width={30} height={30} alt="logowa"></Image>
            <a
              href="https://wa.me/573202093373?text=Hola%20quiero%20confirmar%20mi%20asistencia%20al%20cumplea%C3%B1os"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Confirmar por Whatsapp
            </a>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
