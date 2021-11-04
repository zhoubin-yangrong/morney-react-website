import Layout from "../components/layout";
import React, {useState} from "react";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";
const CategoryWrapper = styled.div`
  background-color:white;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background-color:white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px;
  .note{
    margin-right: auto;
    margin-left: 12px;
    color: #999;
  }
`
function Statistics() {
    const [category,setCategory] = useState<"-" | "+">("-")
    const {records}=useRecords()
    const {getName}=useTags()
    return(
        <Layout>
                <CategoryWrapper>
                    <CategorySection value={category} onChange={value => setCategory(value)}/>
                </CategoryWrapper>
                <div>
                    {/*{JSON.stringify(records)}*/}
                    {/*{(record.tagIds).map(id=><span>{getName(id)}</span>)}---{record.amount}---{day(record.createdAt).format("YYYY年MM月DD日")}*/}
                    {records.map(record=>{
                        return <Item>
                            <div className="tags">
                                {(record.tagIds).map(id=><span>{getName(id)}</span>)}
                            </div>
                            {record.note &&  <div className="note">
                                {record.note}
                            </div> } {/*防止备注不存在*/}

                            <div className="amount">¥{record.amount}</div>
                        </Item>
                    })}
                </div>

        </Layout>
    )
}
export default Statistics