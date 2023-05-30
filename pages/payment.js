import Header from "@/components/Header";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Maps from "@/components/Maps";
import Payment from "@/components/Payment";

export default function payment () {
  return (
    <div> 
    <Header />
    <Center>
    <Payment/>
    </Center>
    <Footer />
    <Copyright />
    </div>
  )
}
