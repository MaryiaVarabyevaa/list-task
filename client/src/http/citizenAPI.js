import { $host } from './index';


export const getAllCitizens = async () => {
  const { data } = await $host.get('api/citizen');
  return data;
};