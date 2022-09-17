import { type } from 'os';
export type TopMangaDto = {
    img: string,
    description: string,
    href?:string,
    title:string,
    character:string,
} &Setting

export type Setting = {
    boxShadow?:string,
    line?:boolean,
    rotate?:number
}
