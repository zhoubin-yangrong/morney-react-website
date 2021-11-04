import Layout from "../components/layout";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection"
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {CategorySection} from "./Money/CategorySection";
const MyLayout = styled(Layout)`
  //border: 1px solid red;
`
type Category ="-" | "+"
const CategoryWrapper = styled.div`
  background-color: #c4c4c4;
`
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


    //提交 自定义hooks失败  未封装

    type newRecordItem = {
        tagIds:number[] ,
        note:string,
        category:"-" | "+",
        amount:number,
    }
    /*type RecordItem =newRecordItem & {
        createdAt:string//ISO 8601
    }*/   //高阶合并用法  Omit<xxx类型>
    type RecordItem =newRecordItem & {
       createdAt:string//ISO 8601
   }
    const [records,setRecords]=useState<RecordItem[]>([])

    const count = useRef(0)
    useEffect(()=>{
        count.current+=1
    })
    useEffect(()=>{
        count.current+=1
        setRecords(JSON.parse( window.localStorage.getItem("records") || "[]"))
    },[])

    useEffect(()=>{
        if (count.current>=1) {
           window.localStorage.setItem("records",JSON.stringify(records))
        }
    },[records])
    const addRecord = (newRecord:newRecordItem)=>{
        if (newRecord.amount<=0){
            alert("请输入金额")
            return false
        }
        if (newRecord.tagIds.length<=0){
          alert("选择记账标签")
            return false
        }

        const record = {...newRecord,createdAt:new Date().toISOString()}
        setRecords([...records,record])
        return true
    }
    const submit=()=>{
        // console.log(records,selected)
        addRecord(selected)
        if ( addRecord(selected)){
            alert("保存")
            //重置
            setSelected({
                tagIds:[] as number[],
                note:"",
                category:"-" as (Category),
                amount:0
            })
        }else{
            alert("保存失败")
        }
    }
    //提交end
    return(
        <MyLayout className="xxx" scrollTop={999999}>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds)=>{onChange({tagIds})}}/>
            <NoteSection value={selected.note}
                         onChange={(note)=>{onChange({note})}}/>
            <CategoryWrapper>
                <CategorySection  value={selected.category}
                                  onChange={(category)=>{onChange({category})}}/>
            </CategoryWrapper>

            <NumberPadSection value={selected.amount}
                              onOk={()=>submit()}
                              onChange={(amount)=>{onChange({amount})}}/>
        </MyLayout>
    )
}
export default Money