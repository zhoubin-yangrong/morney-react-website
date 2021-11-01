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
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
        // <Wrapper>
        //     <Main><h2>记账页</h2>;</Main>
        //     <Nav/>
        // </Wrapper>
    )
}
export default Money