import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
   <>
       <div id="uzerDiv" style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block', margin: 'auto' }}>
      <div id="embeddedDiv" style={{ position: 'relative', minHeight: '200px', overflow: 'hidden', height: '500px' }}>
        <meta name="viewport" content="width=device-width" />
        <iframe id="strimm-iframe" allow="autoplay" allowFullScreen width="100%" height="100%" style={{ margin: '0', border: 'none', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden' }} src="https://iframe.strimm.com/ElpdTv/TheEarthies?guideMode=fixed;&keepGuideOpened=false"></iframe>
      </div>
    </div>
   </>
   

  )
}
