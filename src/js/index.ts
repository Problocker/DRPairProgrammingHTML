import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface IRecords{

Id : number
Title : string
Artist : string
Duration : number
YearOfPublication : string
CountryOrigin : string
IsOnSpotify : boolean
}

let baseURL = "http://drrecordrest.azurewebsites.net/api/records";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        records: []
    },
    methods: {
        GetAll() : void{
            axios.get<IRecords[]>(baseURL)
                .then((response: AxiosResponse<IRecords[]>) => {
                    this.records = response.data;
                    console.log(response.data)
                })
                .catch((error: AxiosError) => {
                    console.log(error.message);
                })

        }
    }
})