// src/components/layout/front-pages/BottomNav.tsx

"use client";

// React imports
import React, { useState } from "react";

// Next.js imports
import { useRouter } from "next/navigation";

// Type Imports
import type { Mode } from '@core/types'

// MUI imports
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// Custom Imports
import ModeDropdown from "../shared/ModeDropdown";
import Logo from '../shared/Logo'

const BottomNav = ({ mode }: { mode: Mode }) => {
  const [value, setValue] = useState("/");
  const router = useRouter();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Navigation paths
  const navigationPaths = [
    { label: "Home", value: "/" },
    { label: "Login", value: "/login" },
    { label: "Register", value: "/register" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        zIndex: 10,
        borderTop: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      {/* Navigation Section */}
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
        sx={{ flexGrow: 1 }}
      >
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
          />
        ))}
      </BottomNavigation>

      {/* Theme Toggle Section */}
      <ModeDropdown />
    </Box>
  );
};


export default BottomNav

