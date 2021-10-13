
import axios from "axios"


    const service=axios.create({
        baseURL:'https://www.jsonbulut.com/json/',
    })
    const ref="e378edf0229ff6305cfb7c2606207f1d"
    export function formsvalues(id:number){
        const prm={
            ref:ref,
            formId:id
        }
        return service.get('forms.php',{params:prm})
    }

