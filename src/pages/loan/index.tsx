import React from "react";
import styled from "styled-components";
import Votes from "./votes";
import Loans from "./loan";

const Wrapper = styled.div``;

const LoanPage = () => {
  return (
    <Wrapper>
      <Loans />
      <Votes />
    </Wrapper>
  );
};

export default LoanPage;
