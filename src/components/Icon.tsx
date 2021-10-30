import React from "react";
// require("icons/tag.svg")
// require("icons/money.svg")
// require("icons/list.svg")
//简化导入
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

const Icon = (props: { name: string | undefined; })=>{
    return(
        <svg className="icon">
            <use xlinkHref={props.name}></use>
        </svg>
    )
}
export default Icon