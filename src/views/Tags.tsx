import Layout from "../components/layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
const TagList = styled.ol`
  font-size: 16px;
  background: white;
  >li{
    margin-left: 15px;
    padding:12px 16px 12px 0px ;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Center=styled.div`
  padding-top: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  >button{
    font-size: 17px;
    line-height: 22px;
    border: none;
    background: skyblue;
    border-radius: 4px;
    padding: 9px 15px;
    color: #FFFFFF;
  }
`
function Tags() {
    const{tag,setTag}=useTags()
    console.log(tag,setTag)
    return(
        <Layout>
            <TagList>
                {tag.map(t=>{
                        return <li key={t}>
                            <span className="oneLine">{t}</span>
                            <Icon name="#right"></Icon>
                        </li>
                    }
                )}
            </TagList>
            <Center>
                <button>新建标签</button>
            </Center>
            {/*<h2>标签页</h2>*/}
        </Layout>
    )
}
export default Tags