
import React from "react";
import { HelperUtils } from "utils/helpers";
import { NewsItem } from "./news.item.dto";

export class NewsItemComponent extends React.PureComponent<{
    item: NewsItem
}, NewsItem>{
    constructor(props: {
        item: NewsItem
    }) {
        super(props);
        this.state = {
            ...this.props.item
        }
    }

    getDescription = () => {
        let check = HelperUtils.isLengthExceed(this.state.description);
        return check ? (
            <>
                <p className="news-description">{HelperUtils.getTextByMaximumLengthAllow(this.state.description, 80) + "..."}<a>
                    Read More
                </a></p>
            </>
        ) : (<>
            <p className="news-description">{this.state.description}</p>
        </>)
    }

    readMoreOnclick = () =>{
        
    }

    render(): React.ReactNode {
        return (
            <>
                <div >
                    <div className="news-item">
                        <div className="img-info">
                            <img src={this.props.item.img} alt="" />
                        </div>
                        <div className="news-item-info">
                            <h1>{this.props.item.title}</h1>
                            {/* {
                                <p>{HelperUtils.getTextByMaximumLengthAllow(this.state.description)}</p>
                            } */}
                            {
                                this.getDescription()
                            }
                            {/* <p className="news-description">{this.state.description}</p> */}
                            <p>Public date:<span className="public-date">{this.state.date}</span></p>
                        </div>
                    </div>
                </div>
                <div className="wrap-space">
                    <div className="line"></div>
                </div>
            </>
        )
    }
}