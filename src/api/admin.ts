import React from 'react';
import { default as getCfg } from '../config';
import { GenresDto } from '@share/dto/api/admin';
import axios from "axios";


export const getGenresAPI = async (): Promise<Array<GenresDto>> => {
    try {
        const result = await axios.post(
            `${new getCfg().OPTIONAL_CONFIG.API_ENDPOINT}/book/load-genres`
        );
        console.log(result.data);
        return result.data;
    } catch (err: any) {
        return [{
            title: 'Fiction',
            subGenresName: ['travel', 'horror', 'clause', 'comic', 'manga']
        }]
    }

}

