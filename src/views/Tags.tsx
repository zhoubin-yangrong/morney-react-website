import Layout from "../components/layout";
import React from "react";
import {useTags} from "../useTags";

function Tags() {

    const{tag,setTag}=useTags()
    console.log(tag,setTag)
    return(
        <Layout>
            <ol>
                {tag.map(t=>{
                        return <li key={t}>{t}</li>
                    }
                )}
            </ol>
            {/*<h2>标签页</h2>*/}
        </Layout>
    )
}
export default Tags