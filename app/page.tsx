
import getPostMetadata from "../components/getPostMetadata";

import ShowCardPage from "../components/showAndNav"



const HomePage = () => {
  
  const postMetadata = getPostMetadata();
  
  return (
    <>
      <ShowCardPage postMetadata={postMetadata}></ShowCardPage>
    </>

  );
};

export default HomePage;
