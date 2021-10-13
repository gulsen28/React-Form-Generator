import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { IForm, TentacledChild } from "../inc/IForm";
import { formsvalues } from "../model/Settings";
export default function App() {
  //const [values, setvalues] = useState<any>("")
  const [formsInformation, setformsInformation] = useState<TentacledChild[]>([])
  const [elm, setelm] = useState<any[]>([]);
  const [val, setval] = useState<{}>({})
  useEffect(() => {
    
      formsvalues(38).then(res => {
        if(res.status===200){
          const resData:IForm=res.data;
          const frmData=resData.forms[0].bilgiler.formjson.children[0].children[0].children[0].children;
          setformsInformation(frmData);
        }
       
      })
          let arrElement: any = []

          // eslint-disable-next-line array-callback-return
          formsInformation.map((item, index) => {
            //console.log('form name:>> ', item);
            arrElement.push(item)//form
            if (item.tag !== "legend") {
              // eslint-disable-next-line array-callback-return
              item.children?.map((item, index) => {
                arrElement.push(item)
            
                if(item.tag==="div"){
                  //console.log('item :>> ', item);
                  // eslint-disable-next-line array-callback-return
                  item.children?.map((item,index)=>{
                    //console.log('item :>> ', item);
                    arrElement.push(item);//Tüm elemanlar burada.Select kendi içerisinde elemanları mevcut
                    if(item.tag==="label" ||item.tag==="select"){
                     // console.log('item :>> ', item);
                      // eslint-disable-next-line array-callback-return
                      item.children?.map((item,index)=>{
                        //console.log('item :>> ', item);
                        arrElement.push(item)//radio ve select elemanları
                      })
                    }
                  setelm(arrElement)  
                  })
                } 
              })
            }
          })
    
        
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formsInformation])

  

  function fncChange(e: any) {
      setval({
       ...val,
       [e.target.name]:e.target.value,
     })
  }
  function fncClick(e: any) {
    e.preventDefault();
    console.log('val :>> ', val);
  }
 

  return (
    <>
      <div className="row">
        <div className="col-2">
          {/* {elm.length&&
          // eslint-disable-next-line array-callback-return
          elm.map((item,index)=>{
            if(item.tag!=="select" &&item.tag==="label"&&item.children===undefined){
             
                  return <div key={index}>
                  {
                  React.createElement(item.tag,
                    {
                      key: "l"+Math.random(),
                      className: item.class,
                      htmlFor: item.for,
                      style: { 
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        marginTop:27 }
                    },
                    item.html + " :")
                  }
                  </div>
              
            }
          })

          } */}
        </div>

        <div className="col-8 mt-4 mb-4" style={{ textAlign: "left",fontWeight:"lighter"}}>
          <Form onSubmit={(e) => fncClick(e)}>
           {elm.length>0&&
           // eslint-disable-next-line array-callback-return
           elm.map((item,index)=>{
             if (item.tag === "select") {
                  
              return React.createElement(
                    
                    item.tag,
                    {
                      key: item.id,
                      type: item.type,
                      value: item.value,
                      className: item.class,
                      name: item.name,
                      htmlFor: item.for,
                      style:{color:"purple",fontSize:16},
                      placeholder: item.placeholder,
                      onChange: fncChange,
                    },
                  
                    item.children.map((item:any, index:number) => {
                      return React.createElement(
                        item.tag,
                        {
                          key: index,
                          className: item.class,
                          placeholder: item.placeholder,
                          name: item.name,
                          htmlFor: item.for,
                          value: item.value,
                          type: item.type,
                          
                          onChange: fncChange,
                          
                        },

                        item.html
                      );
                    })
                  
                
              );
            } else {

              if (item.tag !== "option" && item.tag !== "select") {
                if(item.tag==="button"){
                  return React.createElement(item.tag,
                    {
                      key:item.id,
                      id:item.id,
                      name:item.name,
                      className:item.class,
                      onClick:fncClick
                    },
                    item.html)
                }else if(item.tag==="p"){
                  
                  return React.createElement(item.tag,
                    {
                      key:item.html,
                      className:item.class,
                      style:{color:"grey",fontStyle:"italic"}
                    },
                    "Hint : "+item.html)
                }else if(item.tag==="label" && item.children===undefined){
                  
                  return React.createElement(item.tag,
                    {
                      key: "l"+Math.random(),
                      className: item.class,
                      htmlFor: item.for,
                      style: { 
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        marginTop:27 }
                    },
                    item.html + " :")
                    // return null;
                }else if(item.tag==="legend"){
                  return React.createElement(item.tag,
                    {
                      key:item.html,
                      className:item.class,
                      style:{color:"black",fontStyle:"italic",fontSize:30,fontWeight:"bolder",display:"flex",justifyContent:"center"}
                    },
                    item.html)
                }else if(item.tag==="input" && item.type==="radio"){
                  return React.createElement(
                  item.tag,
                  {
                    key: index,
                    className: item.class,
                    placeholder: item.placeholder,
                    name: item.name,
                    style:{fontSize:16,margin:5},
                    htmlFor: item.for,
                    value: item.value,
                    type: item.type,
                    defaultChecked:item.checked==="checked"?true:false,
                    onChange: fncChange,
                  },

                  item.html
                );
                }
                
                return React.createElement(
                  item.tag,
                  {
                    key: index,
                    className: item.class,
                    placeholder: item.placeholder,
                    name: item.name,
                    style:{fontSize:16,margin:5},
                    htmlFor: item.for,
                    value: item.value,
                    type: item.type,
                    onChange: fncChange,
                  },

                  item.html
                );
              }

            }
           })

           }
          </Form>
        </div>

        <div className="col-2"></div>
      </div>
    </>

  );
}


