export const objectToCaseType = (caseConverter: (key: string) => string, element: any[]|{[key: string]: any}): any|any[]|{[key: string]: any} => {
  const inner = (element: any|any[]|{[key: string]: any}): any|any[]|{[key: string]: any} => {
    if(element === undefined || element === null){
      return element
    }
    else if(Array.isArray(element)){
      return element.map((item) => inner(item))
    }
    else if(typeof element === "object"){
      const updatedDict: {[key: string]: any} = {}
      for(const key in element){
        const updatedKey = caseConverter(key)
        const value = element[key]
        updatedDict[updatedKey] = inner(value)
      }
      return updatedDict
    }
    else {
      return element
    }
  }

  return inner(element)
}