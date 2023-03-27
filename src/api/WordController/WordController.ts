import axios, { AxiosResponse } from "axios";

export class WordController {
  public static searchWords = async (
    searchStr: string
  ): Promise<AxiosResponse<any[]>> => {
    const url = `https://api.datamuse.com/words`;
    return axios.get(url, {
      params: {
        sp: `${searchStr}*`,
      },
    });
  };
}
