import styled from "styled-components";

export const AboutPage = () => {
  return (
    <AboutPageStyled>
      <h2>About.</h2>
      <p>This project utilizes the versitle IPA by Spoonacular. Spoonacular is an API filled with recipes for every diet that will help you achieve all your nutritional goals.</p>
      <p>please check out spoonacular at spoonacular.com</p>
    </AboutPageStyled>
  );
};

const AboutPageStyled = styled.div``;