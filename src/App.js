// jsx imports
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import data from "./data/data.json"
import Footer from "./components/Footer"
import Misc from "./components/Misc"



// styles scss imports
import "./styles/app.scss";
import "./styles/introVideo.scss"
import "./styles/section.scss"
import "./styles/footer.scss"
import "./styles/misc.scss"
import "./styles/mediaQuery.scss"



// imges import

import freshTopicImg from "./assets/academy.jpg";
import freshTopicImg2 from "./assets/story.png";
import tedTalksImg from "./assets/tedTalks.gif";
import franchiseImg from "./assets/franchiseImg.gif";
import mapImg from "./assets/map.png";
import coursesImg from "./assets/coursesImg.png";
import albumImg from "./assets/album.gif";
import baratImg from "./assets/barat.png";
import chaiwalaImg from "./assets/chaivala.png";







// variable for colors import

const yellow= "#fff100", pink=" #ed1e79", white= "#fff", brown= "#6d3d0f";

function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;
  return (
    <>
     <IntroVideo/>


{/* freshtopic  section */}
     <Section 
     h3={freshTopic.heading} 
     text={freshTopic.text}
      btntxt={freshTopic.btn}
       imgSrc={freshTopicImg}
       imgSize="70%"
       backgroundcolor={pink}
       headingColor={yellow}
       textcolor={yellow}
       btnBgcolor={yellow}
       btnColor = {pink}
     />
{/* freshtopic 2 section */}
<Section 
     h3={freshTopic2.heading} 
     text={freshTopic2.text}
      btntxt={freshTopic2.btn}
       imgSrc={freshTopicImg2}
       imgSize="70%"
       backgroundcolor={yellow}
       headingColor={pink}
       textcolor={pink}
       btnBgcolor={pink}
       btnColor = {yellow}
     />
{/* tedTalks */}
<Section 
     h3={tedTalks.heading} 
     text={tedTalks.text}
      btntxt={tedTalks.btn}
       imgSrc={tedTalksImg}
       imgSize="70%"
       backgroundcolor={pink}
       headingColor={yellow}
       textcolor={yellow}
       btnBgcolor={yellow}
       btnColor = {pink}/>

       {/* frenchise */}
<Section 
     h3={franchise.heading} 
     text={franchise.text}
      btntxt={franchise.btn}
       imgSrc={franchiseImg}
       imgSize="70%"
       backgroundcolor={white}
       headingColor={yellow}
       textcolor={brown}
       btnBgcolor={brown}
       btnColor = {yellow}/>
{/* map */}
<Section 
     h3={map.heading} 
     text={map.text}
        imgSrc={mapImg}
       imgSize="70%"
       backgroundcolor={pink}
       headingColor={yellow}
       textcolor={yellow}
       hasbtn={false}/>

       {/* courses */}
<Section 
     h3={courses.heading} 
     text={courses.text}
      btntxt={courses.btn}
       imgSrc={coursesImg}
       imgSize="30%"
       backgroundcolor={yellow}
       headingColor={pink}
       textcolor={pink}
       btnBgcolor={pink}
       btnColor = {yellow}/>

              {/* album */}
<Section 
     h3={album.heading} 
     text={album.text}
      btntxt={album.btn}
       imgSrc={albumImg}
       backgroundcolor={white}
       headingColor={pink}
       textcolor={brown}
       btnBgcolor={brown}
       btnColor = {yellow}/>

{/* barat */}
<Section 
     h3={barat.heading} 
     text={barat.text}
      btntxt={barat.btn}
       imgSrc={baratImg}
       backgroundcolor={pink}
       headingColor={yellow}
       textcolor={yellow}
       btnBgcolor={yellow}
       btnColor = {pink}/>

       
{/* chaiwala */}
<Section 
     h3={chaiwala.heading} 
     text={chaiwala.text}
      btntxt={chaiwala.btn}
       imgSrc={chaiwalaImg}
       backgroundcolor={white}
       headingColor={pink}
       textcolor={brown}
       btnBgcolor={brown}
       btnColor = {yellow}/>
    <Footer/>
    <Misc/>
    </>


  );
}

export default App;
