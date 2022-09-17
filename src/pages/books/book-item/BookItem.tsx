import { BookItemDto } from "@share/dto/book/bookItem.dto";
import React from "react";

export class BookItem extends React.PureComponent<{ bookItem: BookItemDto }>{
    constructor(props: { bookItem: BookItemDto }) {
        super(props);
        this.state = {}
    }

    detachPrice = (prices: string): Array<string> => {
        return prices.split("\\s+");
    }

    render(): React.ReactNode {
        return (
            <div className="containerSub">
                <div className="slide_right slide-base">
                    <div className="product-img">
                        <div className="book-detail-item">
                            <h2>{this.props.bookItem.bookName}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis!... Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo natus dolorem beatae tenetur omnis vel labore amet, explicabo iste impedit eligendi voluptatem consequatur, sequi tempora minima repellendus. Praesentium, beatae!</p>
                            <div className="btn-group">
                                <a href="#">Buy Now</a>
                                <a href="#">View Detail</a>
                            </div>
                        </div>
                        <img src={this.props.bookItem.bookDetail.bookImage} alt="" />
                    </div>
                    <div className="product-description">
                        <div className="line"></div>
                        <h2>{this.props.bookItem.bookName}</h2>
                        <p>Price: <span>{this.detachPrice(this.props.bookItem.bookPrice)[0]}</span>
                            {this.detachPrice(this.props.bookItem.bookPrice)[1]}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}