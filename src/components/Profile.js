import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  color: white;
  background-color: #031d44;
`;

const Profile = () => {
  return (
    <Container>
      <h2>Perfil do Usuário</h2>
      <p>Nome: Amante de Peixes</p>
      <p>Peixes Favoritos: Betta, Neon, Coridora</p>
    </Container>
  );
};

export default Profile;