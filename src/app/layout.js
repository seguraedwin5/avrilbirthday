"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "./layout.module.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Carousel from "./components/Carousel";

const inter = Inter({ subsets: ["latin"] });

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function RootLayout({ children }) {
  const drawerWidth = 240;
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <CacheProvider value={cache}>
            <div>
              <AppBar className={styles.appBar}>
                <Toolbar
                  sx={{
                    textAlign: "center",
                    color: "whitesmoke",
                    textShadow: "5px 5px 12px blue",
                  }}
                >
                  <Typography
                    variant="h4"
                    component={"div"}
                    sx={{ flexGrow: 1 }}
                  >
                    Feliz Cumpleaños Avril
                  </Typography>
                </Toolbar>
              </AppBar>

              <div className={styles.container}>
                <Carousel></Carousel>

                <main>{children}</main>
              </div>
            </div>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
