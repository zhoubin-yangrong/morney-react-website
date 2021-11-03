import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";
import Layout from "components/layout";
import Icon from "components/Icon"
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import { Center } from "components/Center";
type Params={
    id:string
}
const Topbar=styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: white;
`
const InputWrapper=styled.div`
  padding: 8px;
  background-color: white;
  margin-top: 8px;
`
const Tag:React.FC = ()=>{
    const {findTag,updateTag}  =  useTags()
    let {id}=useParams<Params>()
    const tag = findTag(parseInt(id))
    return(
        <Layout>
           <Topbar>
               <Icon name="#left"/>
               <span>编辑标签</span>
               <Icon name="#undefiend"/>
           </Topbar>
            <InputWrapper>
                <Input  label="标签名" placeholder={tag.name} type="text" onChange={(e)=>{
                    console.log(e.target.value);
                    updateTag(tag.id,{name:e.target.value})
                }}/>
            </InputWrapper>
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}
export {Tag}