// src/components/layout/front-pages/BottomNav.tsx

"use client";

// React imports
import React, { useState } from "react";

// Next.js imports
import { useRouter } from "next/navigation";

// Type Imports
import type { Mode } from "@core/types";

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const BottomNav = ({ mode }: { mode: Mode }) => {
  const [value, setValue] = useState("/");
  const router = useRouter();

  const handleNavigation = (newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Navigation paths
  const navigationPaths = [
    { label: "Home", value: "/" },
    { label: "Login", value: "/login" },
    { label: "Register now", value: "/register" },
  ];

  return (
    <>
      {/* Spacer to prevent overlap */}
      <Box sx={{ height: "80px" }} />

      {/* BottomNav */}
      <Box
        sx={{
          width: "60%",
          position: "fixed",
          bottom: 16, // Floating above the bottom
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: (theme) => theme.palette.background.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          zIndex: 10,
          borderRadius: "30px", // Rounded corners
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Floating shadow effect
        }}
      >
        {/* Home Button */}
        <Button
          onClick={() => handleNavigation(navigationPaths[0].value)}
          variant={value === navigationPaths[0].value ? "contained" : "outlined"}
          color='primary'
          sx={{
            borderRadius: "20px",
            // fontWeight: "bold",
            px: 3,
            py: 1,
            textTransform: "none",
            boxShadow: value === navigationPaths[0].value ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {navigationPaths[0].label}
        </Button>

        {/* Right Section: Login and Register Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navigationPaths.slice(1).map((path) => (
            <Button
              key={path.value}
              onClick={() => handleNavigation(path.value)}
              variant={value === path.value ? "contained" : "outlined"}
              color='primary'
              sx={{
                borderRadius: "20px",
                // fontWeight: "bold",
                px: 3,
                py: 1,
                textTransform: "none",
                boxShadow: value === path.value ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {path.label}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BottomNav;



