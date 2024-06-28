import generate from '@babel/generator';
import * as t from '@babel/types';
import MakeAst from "../src/index"
import Data from '../example-methods.json'

const name = Object.keys(Data)

console.log(Data)
const expectCode = (ast) => {
    console.log(ast)
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}
//     it('works', () => {
//         let obj = {
//             "Pools": {
//                 "requestType": "QueryPoolsRequest",
//                 "responseType": "QueryPoolsResponse"
//             }
//         }
//      const key =   Object.keys(obj)
//      const value = Object.values(obj[key]) 
//     expectCode(MakeAst(`Use${key[0]}Query`,`use${key[0]}`,value[0],value[1],key[0].toLowerCase(),`${key[0].toLowerCase()}Query`))

// });
console.log(name)
name.map(n=>{
    console.log(n)
    const value = Object.values(Data[n]) 

    it('works', () => {

      expectCode(MakeAst(`Use${n}Query`,`use${n}`,value[0],value[1],n.toLowerCase(),`${n.toLowerCase()}Query`))

});
})