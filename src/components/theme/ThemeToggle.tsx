"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant={"ghost"}
      onClick={handleThemeToggle}
      className="p-2 rounded-md focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-blue-500" />
      )}
    </Button>
  );
}

export default ThemeToggle;
