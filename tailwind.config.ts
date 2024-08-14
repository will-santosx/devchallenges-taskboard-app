import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#F8FAFC",
      containerBorder: "#97A3B6",
      selectedColor: "#3662E3",
      taskIconsBackground: "#E3E8EF",
      inProgressBackground: "#F5D565",
      doneBackground: "#A0ECB1",
      doneIcon: "#32D657",
      wontDoBackground: "#F7D4D3",
      wontDoIcon: "#DD524C",
      toDoBackground: "#E3E8EF",
      newTaskButton: "#F5E8D5",
      newTaskIcon: "#E9A23B",
    },
    fontSize: {
      title: "2.5rem",
      description: "1rem",
      taskTitle: "1.25rem",
      taskButton: "1rem",
      buttonText: "0.875rem",
      inputLabel: "0.75rem",
    },
    fontWeight: {
      title: "400",
      description: "300",
      taskTitle: "600",
      taskButton: "600",
      buttonText: "500",
      inputLabel: "500",
    },
  },
  plugins: [],
};
export default config;
