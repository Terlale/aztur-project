import directionImg1 from "../img/direction/turkiye.png";
import directionImg2 from "../img/direction/australiya.png";
import directionImg3 from "../img/direction/ingiltere.png";
import directionImg4 from "../img/direction/italya.png";
import directionImg5 from "../img/direction/niderland.png";

const DirectionData = {
  trueData: [
    {
      id: 1,
      country: "TÜRKİYE",
      img: directionImg1,
      city: "İSTANBUL",
      temperature: "+18",
      isPopular: true,
    },
    {
      id: 2,
      country: "İNGİLTƏRƏ",
      img: directionImg3,
      city: "LONDON",
      temperature: "+14",
      isPopular: true,
    },
  ],
  trueData2: [
    {
      id: 3,
      country: "İTALİYA",
      img: directionImg4,
      city: "MİLAN",
      temperature: "+27",
    },
    {
      id: 4,
      country: "AUSTRALİYA",
      img: directionImg2,
      city: "SİDNEY",
      temperature: "+35",
    },
  ],
  falseData: [
    {
      id: 5,
      country: "NİDERLAND",
      img: directionImg5,
      city: "AMSTERDAM",
      temperature: "+22",
    },
  ],
};

export default DirectionData;
