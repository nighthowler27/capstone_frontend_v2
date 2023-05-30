import Header from "@/components/Header";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Maps from "@/components/Maps";
import Faqs from "@/components/Faqs";

export default function faqs () {
  return (
    <div> 
    <Header />
    <Center>
    <Faqs/>
    </Center>
    <Footer />
    <Copyright />
    </div>
  )
}

