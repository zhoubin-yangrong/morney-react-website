import Layout from "../components/layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFFFF;padding: 0 16px;
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
const NoteSection = styled.section`
  
`
const CategorySection = styled.section`
  
`
const NumberPadSection = styled.section`
  
`
function Money() {
    return(
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NoteSection>
                <label>备注:</label>
                <input type="text"/>
            </NoteSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>ok</button>
            </NumberPadSection>
        </Layout>
        // <Wrapper>
        //     <Main><h2>记账页</h2>;</Main>
        //     <Nav/>
        // </Wrapper>

    )
}
export default Money