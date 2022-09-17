import { CarouselDataFactory } from "../../share/args/constants";
import { SilderComponentDto, SliderImageDto } from "@share/dto/components/carousel";
import { Slider } from "components/slider/Slider";
import React from "react";
import '../../components/slider/slider.scss'
import { Header } from "../../components/header/header";
import { ListBooks } from "./book-item/listItem";
import './home.style.scss'
import { NewsAndTrends } from "./news-and-book-trend/news/news";
import { TopMangaList } from "./news-and-book-trend/bookTrends/top.manga.list";

export default class HomePage extends React.PureComponent<any, {
    slider: SilderComponentDto
}>{

    constructor(props: any) {
        super(props);
        this.state = {
            slider: {
                coverImage: [],
                backup: []
            },
        }
    }

    componentDidMount = () => {
        let slideDta: SliderImageDto[] = CarouselDataFactory._getData();
        this.setState({
            slider: {
                backup: slideDta
            }
        });
    }

    getSlider = () => {
        if (this.state.slider.backup === undefined) return [];
        return this.state.slider.backup;
    }

    render(): React.ReactNode {
        return (
            <>
                <Header />
                <div id="slider">
                    <Slider coverImage={[]} backup={[...this.getSlider()]} />
                </div>
                <div className="main-container">
                    <NewsAndTrends />
                    <TopMangaList items={[]}/>
                    <div className="stack-combo">
                        <h3 className="lines-on-sides">BEST SELLER 2022</h3>
                        <ListBooks />
                    </div>
                    <div className="stack-combo">
                        <h3 className="lines-on-sides">COMIC</h3>
                        <ListBooks />
                    </div>
                    <div className="stack-combo">
                        <h3 className="lines-on-sides">MANGA</h3>
                        <ListBooks />
                    </div> <div className="stack-combo">
                        <h3 className="lines-on-sides">LOVE BOOKS</h3>
                        <ListBooks />
                    </div>                
                </div>
            </>)
    }
}