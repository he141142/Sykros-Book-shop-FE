
import React from "react";
import { Col, Rate, Row } from 'antd';
import { API_ENDPOINT } from "config/optional.cfg";
import './style.scss'
import { NewsItem } from "./news.item.dto";
import { NewsItemComponent } from "./news-item";
// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
export class NewsAndTrends extends React.PureComponent<any, {
    trendPack: {
        title: string,
        RateValue: number
    },
    news: Array<NewsItem>
}>{
    constructor(props: any) {
        super(props);
        this.state = {
            trendPack: {
                title: "MARVEL PACKS",
                RateValue: 4,
            },
            news: [
                {
                    img: `${API_ENDPOINT}/news/9bc89ef9f722d3a0550810a557b7ab16.png`,
                    date: "2022-09-11",
                    title: "One Piece Just Said 'Trans Rights' In The Most Oda Way Possible",
                    description: "Yamato and Kiku clear up all speculation on their gender in the latest One Piece chapter "
                },
                {
                    img: `${API_ENDPOINT}/news/b19bace54ed7f76c624af0d1d6590477.png`,
                    date: "2022-09-11",
                    title: "David Cage’s Detroit: Become Human Is Getting A Spin-Off Manga",
                    description: "Detroit: Become Human Tokyo Stories will follow the life of an android idol named Reina"
                },
                {
                    img: `${API_ENDPOINT}/news/b19bace54ed7f76c624af0d1d6590477.png`,
                    date: "2022-09-11",
                    title: "What We're Reading This Fall",
                    description: "Good news, book lovers: This is a great season to be a reader. Let us help you find your next book."
                },
                {
                    img: `${API_ENDPOINT}/news/b19bace54ed7f76c624af0d1d6590477.png`,
                    date: "2022-09-11",
                    title: "What We're Reading This Fall",
                    description: "Good news, book lovers: This is a great season to be a reader. Let us help you find your next book."
                }
            ]
        }

        this.handleRate.bind(this);
    }

    handleRate = (value: number) => {
        console.log("state set");

        this.setState((prevState: any) => ({
            trendPack: {
                ...prevState.trendPack,
                RateValue: value
            }
        }))
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="news-and-trending">
                    <Row>
                        <Col span={16} xs={{
                            span: 24
                        }} lg={{
                            span: 24
                        }}
                            xl={{
                                span: 16
                            }}
                        >
                            <div className="item-header">
                            </div>
                            <div className="pack-trends">
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h1>MARVEL <span>PACKS</span> </h1>
                                        <p>Premium Comic Books Gift Pack - 24 Comics Collection - MARVEL ONLY - Superheroes Comics Grab Bag</p>
                                        <span>
                                            <Rate onChange={this.handleRate} value={this.state.trendPack.RateValue} />
                                            {/* {this.state.trendPack.RateValue ? <span className="ant-rate-text">{desc[this.state.trendPack.RateValue - 1]}</span> : ''} */}
                                        </span>
                                    </div>
                                </div>
                                <img src={`${API_ENDPOINT}/images/trending/erik-mclean-8SeJUmfahu0-unsplash.jpg`} alt="" />
                            </div>

                            <div className="sykros-about">
                                <h1 className="txt-by" data-text="By">THE MAGIC</h1>
                                <h1 className="txt-ne" data-text="Nadeesha Eranjan">WORLD</h1>
                            </div>
                        </Col>
                        <Col span={8} className="listNews" md={{
                            span: 24
                        }}

                            lg={{
                                span: 24
                            }}
                            xl={{
                                span: 8
                            }}>
                            <div className="news-container">
                                {
                                    this.state.news.map(item => {
                                        return (
                                            <NewsItemComponent item={{ ...item }} />
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}