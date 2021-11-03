import React from "react";
import cs from "classnames";


// require("icons/tag.svg")
// require("icons/money.svg")
// require("icons/list.svg")
//简化导入
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props={
    name:string | undefined
} & React.SVGAttributes<SVGElement>
const Icon = (props:Props)=>{
    const{name,children,className,...reset}=props
    return(
        <svg className={cs("icon",className)} {...reset}>
            <use xlinkHref={props.name}/>
        </svg>
    )
}
export default Icon