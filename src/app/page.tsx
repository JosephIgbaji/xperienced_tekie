
import Hero from "./components/Hero"
import StartDoing from './components/StartDoing';
import Mentorship from  "./components/mentorship/Mentorship"
import DevPath from  "./components/dev-path/DevPath"
import GetCertified from  "./components/get-certified/GetCertified"
import StartBuilding from  "./components/start-building/StartBuilding"
import Testimonials from './components/testimonials/Testimonials';
import Partners from './components/partners/Partners';
import GetingReady from './components/getting-ready/GetingReady';
import FAQS from './components/FAQ/FAQS';


export default function Home() {
  return (
    <main className="container max-w-full">
      <Hero />
      <StartDoing />
      <Mentorship />
      <DevPath />
      <GetCertified />
      <StartBuilding />
      <Testimonials />
      <Partners />
      <GetingReady />
      <FAQS />
    </main>
  )
}
