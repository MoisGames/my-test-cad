import { $host } from ".";

interface dataForm {
    name: string,
    email: string,
    message: string,
}

export const sendData = async (formData: dataForm ) => {
    const {data} = await $host.post('/express_backend', formData)
    return data;
}