import { SilderComponentDto, SliderImageDto, SliderImageDtoExtends } from "@share/dto/components/carousel";
import React from "react";
import { SliderItem } from "./slideItem";
import './slider.scss'

export class Slider extends React.PureComponent<SilderComponentDto,any>{
    constructor(props:SilderComponentDto){
        super(props);
        this.state={
            spacer: 0,
            slideCount: 0
        }
    }

    previous = (): void =>{
        let left = this.state.spacer;
        if(this.props.backup===undefined) return;
        if (left === 0) {
			this.setState({spacer: -1 * (this.props.backup.length - 1) * 100});
			return;
		}
		this.setState({spacer: left+=100});
    }

    next =()=> {
		let left = this.state.spacer;
        if(this.props.backup===undefined) return;
		if (left === -1 * (this.props.backup.length - 1) * 100) {
			this.setState({spacer: 0});
			return;
		}
		this.setState({spacer: left-=100});
	}

    render(): React.ReactNode {
        console.log("backup");

        console.log(this.props.backup);
        
        
       if( this.props.backup === undefined){
        return(
            <></>
        );
       }
        var sliderNodes = this.props?.backup.map( (slide:SliderImageDto, index) =>{
            slide.left = 100 * index;
            slide.index = this.state.spacer;
            return (
                <SliderItem slide ={slide}  />
              );
            })
            return (
                <div className='slide-container'>
                          {sliderNodes}
                          <button className='prev' onClick={this.previous}><i className='fa fa-arrow-left'></i></button>
                          <button className='next' onClick={this.next}><i className='fa fa-arrow-right'></i></button>
                      </div>
              );
    }
}