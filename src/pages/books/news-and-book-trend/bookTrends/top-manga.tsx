import React from 'react'
import { TopMangaDto } from './top.manga.dto'
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { StyleSheet } from 'react-native';
export class TopManga extends React.PureComponent<{
    item: TopMangaDto
}, TopMangaDto
>{
    constructor(props: {
        item: TopMangaDto
    }) {
        super(props)
        this.state = this.props.item
    }

    render(): React.ReactNode {
        let boxShadowTopManga = this.state.boxShadow;
        return (
            <>
                <div className="manga-item" style={{boxShadow:boxShadowTopManga}}>
                    <div className='img-container'>
                        <div className='img-background' style={{ backgroundImage: `url(${this.state.img})` }}></div>
                        {/* <img src={this.state.img} alt="" /> */}
                        <img src={this.state.character} alt="" />
                    </div>
                    <div className="sub-content">
                        <h1>{this.state.title}</h1>
                        <p>{this.state.description}</p>
                    </div>
                    <div className="btn-class">
                        <button>View Packs</button>
                        <button className='like'> <HeartTwoTone twoToneColor="#eb2f96" /></button>
                        {/* <button></button> */}
                    </div>
                    {/* <div className="line"></div> */}
                </div>
            </>
        )
    }
}

// const styleForTopMangaItem= StyleSheet.create(
//     {
//         mangaItem:{
//             SHAdow
//         }
//     }
// )