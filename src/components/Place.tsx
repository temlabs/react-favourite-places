interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  imageURL: string;
  imageAlt: string;
  mapLink: string;
  description: string;
}

function Place({
  title,
  placeName,
  countryName,
  imageURL,
  imageAlt,
  mapLink,
  description,
}: PlaceProps): JSX.Element {
  return (
    <section>
      <h2>{title}</h2>
      <h3>
        <em>
          {placeName}, {countryName}
        </em>
      </h3>
      <img src={imageURL} alt={imageAlt} />
      <p>{description}</p>
    </section>
  );
}

export default Place;
