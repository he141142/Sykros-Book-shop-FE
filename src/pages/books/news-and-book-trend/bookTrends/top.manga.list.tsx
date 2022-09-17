import { API_ENDPOINT } from 'config/optional.cfg';
import React from 'react'
import { TopManga } from './top-manga';
import { TopMangaDto } from './top.manga.dto';
import './bookTrends.scss'
import { Col, Row } from 'antd';
export class TopMangaList extends React.PureComponent<{ items: Array<TopMangaDto> }, {
    mangaList: Array<TopMangaDto>
}>{
    constructor(props: { items: Array<TopMangaDto> }) {
        super(props);
        this.state = {
            mangaList: [
                ...this.props.items,
                {
                    img: `${API_ENDPOINT}/top-manga/One-Piece-Logo.png`,
                    description: 'Go on an action-packed journey with One Piece, a series of manga books that follow the adventures of Monkey D. Luffy as he sets off to find the greatest treasure in the world.',
                    title: 'ONE PIECE PACKS',
                    href: '#',
                    character: `${API_ENDPOINT}/top-manga/monkey_d__luffy__gear_5____updated_by_b_a_i_o_r_e_t_t_o_df3gezw-fullview.png`,
                    boxShadow:'rgba(250, 0, 0, 0.56) 0px 22px 70px 4px',
                    rotate: 30
                },
                {
                    img: `${API_ENDPOINT}/top-manga/Naruto_logo.svg.png`,
                    description: 'Go on an action-packed journey with One Piece, a series of manga books that follow the adventures of Monkey D. Luffy as he sets off to find the greatest treasure in the world.',
                    title: 'NARUTO PACKS',
                    href: '#',
                    character: `${API_ENDPOINT}/top-manga/292-2926297_naruto-modo-kurama-png-adult-naruto-six-paths.png`,
                    boxShadow:'rgba(250, 0, 0, 0.56) 0px 22px 70px 4px',
                    rotate: 0,
                },
                {
                    img: `${API_ENDPOINT}/top-manga/download-removebg-preview.png`,
                    description: 'Go on an action-packed journey with One Piece, a series of manga books that follow the adventures of Monkey D. Luffy as he sets off to find the greatest treasure in the world.',
                    title: 'BLEACH PACK',
                    href: '#',
                    character: `${API_ENDPOINT}/top-manga/94f358934b7b1c1a5e25eac385028073.png`,
                    boxShadow:'rgba(250, 0, 0, 0.56) 0px 22px 70px 4px',
                    rotate: 30,

                }
            ]
        }
    }

    render(): React.ReactNode {
        return (
            <div className="top-manga">
                <Row>
                    {
                        this.state.mangaList.map(
                            (item,index) => {
                                let line = false
                                if(index===this.state.mangaList.length-1){
                                    line = true;
                                }
                                return (
                                    <Col span={8} 
                                    xxl={
                                        {
                                            span:8
                                        }
                                    }
                                    xl={{
                                        span:8
                                    }}
                                    md={{
                                        span: 24
                                    }}
                                    >
                                        <TopManga item={{
                                            ...item,line
                                        }} />
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </div>
        )
    }

}
