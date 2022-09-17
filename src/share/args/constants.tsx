import { SliderImageDto } from "@share/dto/components/carousel";
import { CarouselData } from "./data";

class DataFactory<T>{
      _data:T;
      constructor(data:T){
         this._data = data;
      }
      _getData = () =>{
         return this._data;
      }
}

export const CarouselDataFactory  = new DataFactory<SliderImageDto[]>(CarouselData);