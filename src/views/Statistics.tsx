import Layout from "../components/layout";
import React, {useState} from "react";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";
const CategoryWrapper = styled.div`
  background-color:white;
  & ~ div{
    header{
      background-color:#c4c4c4;
      font-size: 18px;
      line-height: 20px;
      padding: 10px 16px;
    }
  }
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background-color:white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
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
    const selectedRecords = ()=>{
        return records.filter(r=>r.category===category)
    }
    const hash:{[K:string]:RecordItem[]} ={}
    selectedRecords().forEach(r=>{
        const key = day(r.createdAt).format("YYYY年MM月DD日")
        if(!(key in hash)){
            hash[key]=[]
        }
        hash[key].push(r)
    })
   /* console.log(hash);//对象转数组
    console.log(Object.entries(hash))*/
    const array = Object.entries(hash).sort((a,b)=>{
         if (a[0]===b[0])return 0
        if (a[0]>b[0])return -1
        if (a[0]<b[0])return 1
        return 0
    })
    console.log(array);
    return(
        <Layout>
                <CategoryWrapper>
                    <CategorySection value={category} onChange={value => setCategory(value)}/>
                </CategoryWrapper>
                {array.map(([data,records])=><div key={data}>
                    <header>
                        {data}
                    </header>

                    {records.map(record=>{
                        return <Item key={record.createdAt}>
                            <div className="tags oneLine">
                                {(record.tagIds).map(id=><span key={id}>{getName(id)}</span>).reduce((result,span,index,array)=>
                                        result.concat(
                                            index < array.length-1?   [span,"-"]: [span]
                                        ),[] as any)
                                }

                            </div>
                            {record.note &&  <div className="note">
                                {record.note}
                            </div> } {/*防止备注不存在*/}

                            <div className="amount oneLine">¥ {record.amount}</div>

                        </Item>
                    })}
                </div>)}
                {/*<div>*/}
                {/*    /!*{JSON.stringify(records)}*!/*/}
                {/*    /!*{(record.tagIds).map(id=><span>{getName(id)}</span>)}---{record.amount}---{day(record.createdAt).format("YYYY年MM月DD日")}*!/*/}
                {/*    {selectedRecords().map(record=>{*/}
                {/*        return <Item key={record.createdAt}>*/}
                {/*            <div className="tags">*/}
                {/*                {(record.tagIds).map(id=><span key={id}>{getName(id)}</span>)}*/}
                {/*            </div>*/}
                {/*            {record.note &&  <div className="note">*/}
                {/*                {record.note}*/}
                {/*            </div> } /!*防止备注不存在*!/*/}

                {/*            <div className="amount">¥ {record.amount}</div>*/}
                {/*            <div>{day(record.createdAt).format("YYYY年MM月DD日")}</div>*/}
                {/*        </Item>*/}
                {/*    })}*/}
                {/*</div>*/}

        </Layout>
    )
}
export default Statistics