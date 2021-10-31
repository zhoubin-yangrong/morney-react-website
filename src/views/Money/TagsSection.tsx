import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFFFF;padding: 0 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  > ol{display: flex;margin: 0 -12px 17px;
    > li{
      padding: 4px 17px;margin: 0 12px;background: #D9D9D9;border-radius: 18px;font-size: 14px;
    }
  }
  > button{
    font-style: normal;font-weight: normal;font-size: 14px;line-height: 22px;/* identical to box height, or 157% */background: #FFFFFF;border: none;
    border-bottom: 1px solid #333;padding: 0 2px;margin-bottom: 12px;
  }
`
export {TagsSection}