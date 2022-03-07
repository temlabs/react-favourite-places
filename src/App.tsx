import PageHeader from "./PageHeader";
import MainContent from "./MainContent";
import PageFooter from "./PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <MainContent />
      <PageFooter />
    </>
  );
}

export default App;

/**
 * The app's single page should have:

    a page header showing a suitable title.
    at least four "place" entries (see details below)
    a page footer including - at least - attribution for any images used.

Each "place" entry should have:

    a title (text)
    a place name (text)
    a country name (text)
    a main image (URL)
    a link to the rough location on google maps (or alternative) (URL)
    some text explaining why you like the place

Regarding components

Create a React component to represent a Place. Parameterise it with props so that you can reuse the component for each of your favourite places.
 * 
 * 
 * 
 */
