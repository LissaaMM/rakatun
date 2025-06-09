import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #031d44;
  padding: 15px;
  text-align: center;
  color: white;
  position: relative;
`;

const Button = styled.button`
  background-color: #005f73;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #008c8c;
  }
`;

const StoriesContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  justify-content: center;
  gap: 10px;
`;

const Story = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;

const Header = () => {
  const [showStories, setShowStories] = useState(false);
  
  const stories = [
    "https://via.placeholder.com/100x150?text=Peixe1",
    "https://via.placeholder.com/100x150?text=Peixe2",
    "https://via.placeholder.com/100x150?text=Peixe3"
  ];

  return (
    <Nav>
      🐠 Jelly Fish - Rede Social Aquática
      <Button onClick={() => setShowStories(!showStories)}>
        Ver Stories
      </Button>
      <StoriesContainer show={showStories}>
        {stories.map((src, index) => (
          <Story key={index} src={src} alt={`Story ${index + 1}`} />
        ))}
      </StoriesContainer>
    </Nav>
  );
};

export default Header;