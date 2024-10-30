import axios from "axios";

const $host = axios.create({
    baseURL: "https://my-test-cad-serve.vercel.app/"
})

export {$host}
