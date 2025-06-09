import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  color: white;
  background-color: #031d44;
  min-height: 100vh;
`;

const Feed = () => {
  return (
    <Container>
      <h2>Feed de Peixes</h2>
      <p>Compartilhe fotos e vídeos do seu aquário! 🐠</p>
    </Container>
  );
};

export default Feed;