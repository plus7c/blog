
import getPostMetadata from "../components/getPostMetadata";

import Show from "../components/showAndNav"



const HomePage = () => {
  
  const postMetadata = getPostMetadata();
  
  return (
    <>
      
      <Show postMetadata={postMetadata}></Show>

    </>

  );
};

export default HomePage;
