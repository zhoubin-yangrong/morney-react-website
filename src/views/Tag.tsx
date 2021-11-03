import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";
import Layout from "components/layout";
import Icon from "components/Icon"
import {Button} from "../components/Button";
import styled from "styled-components";
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
const Tag:React.FC = ()=>{
    const {findTag}  =  useTags()
    let {id}=useParams<Params>()
    const tag = findTag(parseInt(id))
    return(
        <Layout>
           <Topbar>
               <Icon name="#left"/>
               <span>编辑标签</span>
               <Icon name="#undefiend"/>
           </Topbar>

            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="标签" value={tag.name}/>
                </label>
            </div>




            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    )
}
export {Tag}