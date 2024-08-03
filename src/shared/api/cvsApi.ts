import axios from 'axios';
import { URL } from '../constants';
import { CV } from '../types/cvsTypes';

export const getCvs = async (token: string): Promise<CV[]> => {
  const { data } = await axios.get(`${URL}/get-cvs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
