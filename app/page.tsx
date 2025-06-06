//import Image from "next/image";
import Background from "./layout/Background";
import MainCard from "./layout/MainCard";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Background>
        <MainCard></MainCard>
      </Background>
    </ThemeProvider>
  );
}
