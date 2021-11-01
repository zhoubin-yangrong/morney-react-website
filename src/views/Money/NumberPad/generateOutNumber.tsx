const generateOutNumber=(text:string,outNumber="0")=>{
    switch (text){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (outNumber==="0"){
                return (text)
            }else {
                return (`${outNumber}${text}`)
            }

        case ".":

            if (outNumber.indexOf(".")>=0){
                return outNumber
            }else {

                return (`${outNumber}${text}`)
            }

        case "删除":
            console.log("删除")
            if (outNumber.length===1){
                return ("0")
            }else {
                return outNumber.slice(0,-1) || "0"
            }

        case "清空":
            return ("0")

        default:
            return ("0")

    }
}
export default generateOutNumber
