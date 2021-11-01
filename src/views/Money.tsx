import Layout from "../components/layout";
import React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection"
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {CategorySection} from "./Money/CategorySection";

const MyLayout = styled(Layout)`
  //border: 1px solid red;
`
function Money() {
    return(
        <MyLayout className="xxx">
            <TagsSection/>
            <NoteSection/>
            <CategorySection>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
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
                    <button className="ok">ok</button>
                    <button className="zero">0</button>
                    <button className="point">.</button>


                </div>

            </NumberPadSection>
        </MyLayout>
        // <Wrapper>
        //     <Main><h2>记账页</h2>;</Main>
        //     <Nav/>
        // </Wrapper>
    )
}
export default Money