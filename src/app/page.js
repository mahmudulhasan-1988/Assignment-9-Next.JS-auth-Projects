import AboutUs from "@/components/AboutUs";
import Action from "@/components/Action";
import Banner from "@/components/Banner";
import Inspiration from "@/components/Inspiration";
import PetsCard from "@/components/HomePetsCard";
import Image from "next/image";
import SuccessStories from "@/components/SuccessStories";
import PetCareGuide from "@/components/PetCareGuide";

export default function Home() {
  return (
    <div>
     <Banner />
     <PetsCard />
     <Action />
     <SuccessStories />
    <PetCareGuide />
     <Inspiration />
     <AboutUs />
    </div>
  );
}
