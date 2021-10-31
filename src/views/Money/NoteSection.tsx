import styled from "styled-components";

const NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;
  >label{
    white-space: nowrap;
    margin-right:8px ;

  }
  > input{
    display: block;
    height: 72px;
    width: 100%;
    border: none;
    background: none;
    
  }
  
`
export {NoteSection}