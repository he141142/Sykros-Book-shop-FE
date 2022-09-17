import { type } from 'os';
import { DefaultApiDto } from "./default.dto"

 type GenresDto = {
    title: string,
    subGenresName: Array<string>
}

 type GenresDtoExtendsApi = {
    title: string,
    subGenresName: Array<string>
} & DefaultApiDto

export type {
     GenresDto,  GenresDtoExtendsApi
}