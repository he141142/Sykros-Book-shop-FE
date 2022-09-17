import { ListBookSampleData } from "../../../share/args/data";
import { BookItemDto } from "@share/dto/book/bookItem.dto";
import React from "react";
import { BookItem } from "./BookItem";
import "./style.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HelperUtils } from "utils/helpers";

export class ListBooks extends React.PureComponent<any, { booksItemList: Array<BookItemDto> }>
{
    constructor(props: any) {
        super(props);
        this.state = {
            booksItemList: []
        }
    }

    componentDidMount = () => {
        let dataSample = ListBookSampleData.slice(0,4);
        this.setState({
            booksItemList : HelperUtils.SeedArray(dataSample)
        })
    }


    renderBookItem = (amountColInRow: number) => {
        let arrCpy = HelperUtils.reverseRandomArray(this.state.booksItemList);
        // eslint-disable-next-line array-callback-return
        let cpy = arrCpy.map((item, index) => {
            console.log("index98",index);
            if (index < amountColInRow){
                return item
            }else{
                return undefined;
            }
        }).filter(item => item !== undefined)

        return (
            <>
                {
                   cpy.map(
                        (item) => {
                            return(
                                <Col md={{
                                    span:4 
                                }}
                                xl={{
                                    span:2
                                }}>
                                    <BookItem bookItem={item}></BookItem>
                                </Col>
                            )
                        }
                    )
                }
            </>
        )
    }

    render(): React.ReactNode {
        return (
            <div className="bookList">
                <Row>
                    {
                        this.renderBookItem(6)
                    }
                </Row>
            </div>
        )
    }
}