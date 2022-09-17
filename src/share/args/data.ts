import { BookItemDto } from "@share/dto/book/bookItem.dto";
import { SliderImageDto } from "@share/dto/components/carousel"
import { API_ENDPOINT } from "config/optional.cfg"
import BookData2 from './data.json';
import BookItem from '../../pages/books/book-item/sample.data.json'
const CarouselData: SliderImageDto[]  = [
    {
     src: API_ENDPOINT+'/images/freddie-marriage-w8JiSVyjy-8-unsplash.jpg',
     quote: 'Catering Quote Template can be customized by replacing the logo, changing the color and adding other fields.'
    },
    {
     src: API_ENDPOINT+'/images/giammarco-zeH-ljawHtg-unsplash.jpg',
     quote: 'Quickly draft photography quotes with this free Wedding Photog' 
    },
    {
     src: API_ENDPOINT+'/images/jeet-dhanoa-tGHkC5ntUGc-unsplash.jpg',
     quote: 'Automatically generate custom insurance quotes with this free, online Insurance Quote Template! ' 
    },
    {
     src: API_ENDPOINT+'/images/kaleidico-Z_ujXc-AKUw-unsplash.jpg',
     quote: 'hotography quotes with this ' 
    }
 ]


 const ListBookSampleData:Array<BookItemDto> = BookItem;


 
 
 
 export {
    CarouselData,
    ListBookSampleData
 }