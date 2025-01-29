import { getCapitalCase } from "@/utils/utilities/getCapitalCase"

export const getDBValToCamelCase = val => {
    if(!val.includes("_")) return val.toUpperCase()
    let newVal = val.split("_")
    newVal = newVal.join(" ")
    return getCapitalCase(newVal)
}