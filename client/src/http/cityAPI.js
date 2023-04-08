import { $host } from "./index";


export const getAllCities = async () => {
    const { data } = await $host.get('api/city');
    return data;
}