import React from "react";
import {useParams,useHistory} from "react-router-dom";
import {useTags} from "hooks/useTags";
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
    const {findTag,updateTag,deleteTag}  =  useTags()
    let {id}=useParams<Params>()
    const tag = findTag(parseInt(id))
    const content = (tag:{id:number,name:string})=>{
        return(
            <>
                <InputWrapper>
                    <Input  label="标签名" value={tag.name} type="text" onChange={(e)=>{
                        console.log(e.target.value);
                        updateTag(tag.id,{name:e.target.value})
                    }}/>
                </InputWrapper>
                <Center>
                    <Button onClick={()=> deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </>
        )
    }
    const history = useHistory()
    const onBack=()=>{
        // window.history.back()
        history.go(-1)
        // history.push("/tags");
    }
    return(
        <Layout>
           <Topbar>
               <Icon className="zhou" onClick={onBack} name="#left"/>
               <span>编辑标签</span>
               <Icon name="#undefiend"/>
           </Topbar>
            {tag?content(tag): <Center><Button onClick={onBack} >返回上级页面</Button></Center>}
            {/*<InputWrapper>
                <Input  label="标签名" value={tag.name} type="text" onChange={(e)=>{
                    console.log(e.target.value);
                    updateTag(tag.id,{name:e.target.value})
                }}/>
            </InputWrapper>
            <Center>
                <Button onClick={()=> deleteTag(tag.id)}>删除标签</Button>
            </Center>*/}
        </Layout>
    )
}
export {Tag}