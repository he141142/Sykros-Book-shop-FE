import { type } from 'os';
import { StyleSheet } from 'react-native';

type SliderImageDto = {
    src: string,
    quote: string,
    left?: number,
    index?: number
}

type SliderImageDtoExtends = {
    left: number,
    index: number
} & SliderImageDto


type SilderComponentDto = {
    coverImage?: SliderImageDto[],
    backup?: SliderImageDto[]
}



export { type
    SliderImageDto,type SilderComponentDto,type SliderImageDtoExtends
}


