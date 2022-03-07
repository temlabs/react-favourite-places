//import { StringLiteralLike } from "typescript";
import Place from "./components/Place";
import bellFarm from "./images/32_bell_farm_ave.jpeg";
import sparrowDrive from "./images/sparrowdrive.jpg";
//import dayWaterman from "./images/daywaterman.jpg";
//import parkView from "./images/parkview.jpg";

interface placeObject {
  title: string;
  placeName: string;
  countryName: string;
  imageURL: string;
  imageAlt: string;
  description: string;
  mapLink: string;
}

const bellFarmAvenuePlace: placeObject = {
  title: "The Road Where it All Began",
  placeName: "32 Bell Farm Ave",
  countryName: "UK",
  imageURL: bellFarm,
  imageAlt:
    "The leftmost house of a terrace row in London. It has a hedge infront of it. The house has a combination of grey/beige stone pannelling and white windows and doors. The weather is grey.",
  description:
    "I came home from the hospital to my first house in the tail-end of winter '97. This house would grow into me as much as I into it. It's the home of so many memories and was the focal point of the vibrant, bustling community that surrounded me as a child.",
  mapLink: "",
};

const sparrowDrivePlace: placeObject = {
  title: "The Next Phase",
  placeName: "6 Sparrow Drive",
  countryName: "UK",
  imageURL: sparrowDrive,
  imageAlt:
    "A yellow brick detatched house. On the drive way is a silver Mercedes convertible and a green Vauxhall Corsa.",
  description:
    "When I was in year 3, the family decided it was time to move out of London and it was decided that we would head north into the leafy Hertfordshire town called Stevenage. I still live here in fact, and it's been the ground from which my subsequent expeditions have sprouted forth from.",
  mapLink: "",
};

const placesArray: placeObject[] = [bellFarmAvenuePlace, sparrowDrivePlace];

const placesElemtArray = placesArray.map((x) => (
  <>
    <Place
      title={x.title}
      placeName={x.placeName}
      countryName={x.countryName}
      imageURL={x.imageURL}
      imageAlt={x.imageAlt}
      description={x.description}
      mapLink={x.mapLink}
    />
  </>
));

function MainContent(): JSX.Element {
  return <div className="places">{placesElemtArray}</div>;

  // <Place

  // title={"The Road Where it All Began"}
  // placeName={"32 Bell Farm Ave"}
  // countryName={"UK"}
  // imageURL={bellFarm}
  // imageAlt={
  //     "The leftmost house of a terrace row in London. It has a hedge infront of it. The house has a combination of grey/beige stone pannelling and white windows and doors. The weather is grey."
  // }
  // description={
  //     "I came home from the hospital to my first house in the tail-end of winter '97. This house would grow into me as much as I into it. It's the home of so many memories and was the focal point of the vibrant, bustling community that surrounded me as a child."
  // }
  // mapLink={""}
  // />
}

export default MainContent;
