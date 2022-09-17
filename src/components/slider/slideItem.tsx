import { SliderImageDto, SliderImageDtoExtends } from "@share/dto/components/carousel";
import React from "react";



export class SliderItem extends React.Component<{slide: SliderImageDto},any>{

    constructor(props:{slide: SliderImageDto}){
        super(props);
    }

    render(): React.ReactNode {
        if(this.props.slide.left===undefined||this.props.slide.index===undefined)
        return;
        let style = {
            left: (this.props.slide.left + this.props.slide.index) + '%',
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.props.slide.src +')'
          };
          return (
            <div className="slide" style={style}>
				<div className='slide-content'>
					<h2 className="neonText-LightPink">{this.props.slide.quote}</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quo recusandae cum alias amet! Aliquam laborum commodi mollitia id quasi.</p>
				</div>	
			</div>
          );
    }
}