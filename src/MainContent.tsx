import Place from "./components/Place";
import bellFarm from "/home/2202-008-itl/Developer/Academy/Training/react-favourite-places/src/images/32_bell_farm_ave.jpeg";

function MainContent(): JSX.Element {
  return (
    <Place
      title={"The Road Where it All Began"}
      placeName={"32 Bell Farm Ave"}
      countryName={"UK"}
      imageURL={bellFarm}
      imageAlt={
        "The leftmost house of a terrace row in London. It has a hedge infront of it. The house has a combination of grey/beige stone pannelling and white windows and doors. The weather is grey."
      }
      description={
        "I came home from the hospital to my first house in the winter of 97. This house would grow into me as much as I into it. It's the home of so many memories and was the focal point of the young, bustling community that surrounded me as a child."
      }
      mapLink={""}
    />
  );
}

export default MainContent;
