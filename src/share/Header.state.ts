import { DefaultApiDto } from './dto/api/default.dto';
import { GenresDto } from './dto/api/admin';
import { dropDownDto } from './../components/ui-components/index.dto';
import { type } from "os"; 

type HeaderDto = {
    linkColor: string,
    NavLinkClassName: Array<string>,
    dropDowns?:dropDownDto[],
    genres?:GenresDto[]
}  & DefaultApiDto

export type { HeaderDto }