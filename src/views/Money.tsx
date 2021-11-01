import Layout from "../components/layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection"
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {CategorySection} from "./Money/CategorySection";

const MyLayout = styled(Layout)`
  //border: 1px solid red;
`
type Category ="-" | "+"
function Money() {
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note:"",
        category:"-" as (Category),
        amount:0
    })
    return(
        <MyLayout className="xxx">
            {selected.tags.join("")}
            <hr/>
            {selected.note}

            <TagsSection value={selected.tags}
                         onChange={(tags)=>{
                setSelected({...selected,tags})}}
            />
            <NoteSection value={selected.note}
                         onChange={(note)=>{
                             setSelected({...selected,note})}}/>
            <CategorySection  value={selected.category}
                              onChange={(category)=>{
                                  setSelected({...selected,category})}}/>
            <NumberPadSection value={selected.amount}
                              onOk={()=>{
                                  console.log("ok提交")}}
                              onChange={(amount)=>{
                                  setSelected({...selected,amount})}}/>
        </MyLayout>
        // <Wrapper>
        //     <Main><h2>记账页</h2>;</Main>
        //     <Nav/>
        // </Wrapper>
    )
}
export default Money