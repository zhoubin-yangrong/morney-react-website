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
        tagIds:[] as number[],
        note:"",
        category:"-" as (Category),
        amount:0
    })
   /* 类型合并(如果全复制selected的类型 传参会有数量问题)
    Partial 合并的意思
    typeof selected 继承此类*/
    const onChange = (obj:Partial<typeof selected>)=>{
        setSelected({...selected,...obj})
    }
    return(
        <MyLayout className="xxx">
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds)=>{onChange({tagIds})}}/>
            <NoteSection value={selected.note}
                         onChange={(note)=>{onChange({note})}}/>
            <CategorySection  value={selected.category}
                              onChange={(category)=>{onChange({category})}}/>
            <NumberPadSection value={selected.amount}
                              onOk={()=>{console.log("ok提交")}}
                              onChange={(amount)=>{onChange({amount})}}/>
        </MyLayout>
    )
}
export default Money