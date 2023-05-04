import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import AutoAwesomeMosaicRoundedIcon from "@mui/icons-material/AutoAwesomeMosaicRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Logo from "../../images/Logo/logo.png";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@mui/joy";

type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex justify-end min-w-full pe-5 pt-3">
        <CloseRoundedIcon
          sx={{
            color: "#fff",
          }}
        />
      </div>
      <center className="flex flex-col my-8 gap-3">
        <Link href="/" className="my-auto">
          <Image src={Logo} alt="Logo" width={40} height={40} />
        </Link>
        <Link href="/" className="my-auto">
          <div className="font-outfit text-md font-bold text-purple-300">
            Gujarat Explorer
          </div>
        </Link>
      </center>
      <List>
        <Link href="/#ByCities">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryRoundedIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <div className="font-outfit font-bold tracking-wide text-white/80">
                  Category
                </div>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/gallery">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AutoAwesomeMosaicRoundedIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <div className="font-outfit font-bold tracking-wide text-white/80">
                  Gallery
                </div>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="/contact-us">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactSupportRoundedIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <div className="font-outfit font-bold tracking-wide text-white/80">
                  Contact Us
                </div>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/about-us">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoRoundedIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <div className="font-outfit font-bold tracking-wide text-white/80">
                  About Us
                </div>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          aria-label="left Dwawer"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{
            color: "#000",
          }}
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon
            sx={{
              color: "#fff",
            }}
          />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          sx={{
            backdropFilter: "blur(3px)",
            "& .MuiDrawer-paper": {
              backgroundColor: "#011D3E",
            },
          }}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
