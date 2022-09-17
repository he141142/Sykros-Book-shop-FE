import React, { PureComponent, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyleSheet, Text, View } from "react-native";
 import { HeaderDto } from "@share/Header.state"
import { TopHeader } from "./topHeader";
import DropDownItem from "../ui-components/dropdowns.item";
import './header.scss'
import { GenresDto } from "@share/dto/api/admin";
import { getGenresAPI } from "../../api/admin";

export class Header extends React.PureComponent<{}, HeaderDto> {
    constructor(props: any) {
        super(props);
        this.state = {
            linkColor: "text-dark",
            NavLinkClassName: ['text-dark'],
            genres: [
                {
                    title:'Fiction',
                    subGenresName:['travel','horror','clause','comic','manga']
                }
            ] as GenresDto[],
            comments: null,
            commentsError: "",
            commentsLoading: false,
            posts: null,
            postsError: "",
            postsLoading: false,
        };
    }

    async componentDidMount () {
        await this.getGenresList()
    }




    getGenresList = async () => {
        this.setPostLoading(true);
        try {
            await this.getGenresFromAPI();
        } catch (err: any) {
            this.setState({
                postsError: err.message || "Unexpected Error!"
            })
        } finally {
            // this.setPostLoading(false);
        }
    };

    getGenresFromAPI = async () => {
        try{
            let genresList: GenresDto[] = await getGenresAPI();
            console.log("kepp");
            
            this.setState({
                genres: genresList
            })
        }catch(e){
            this.setState({
                genres: [ {
                    title:'Fiction',
                    subGenresName:['travel','horror','clause','comic','manga']
                }]
            })
        }
      
    }

    setLoading = (val: boolean): void => {
        this.setState({
            postsLoading: val
        })
    }



    setPostLoading = (val: boolean): void => {
        this.setState({
            postsLoading: val
        })
    }

    getNavLinkClassName = () => {
        return this.state.NavLinkClassName.reduce((acc, prev) => {
            return acc += ' ' + prev;
        }, '')
    }

    getNavLinksArray = (): Array<string> => {
        return ['Home', 'Fiction', 'NoFiction'];
    }
    render(): React.ReactNode {
        return (
            <>
                <TopHeader />
                <Navbar bg="white" variant="dark">
                    <Container style={styles.subTitle}>
                        <Nav style={styles.subTitle} as="ul">
                            <Nav.Link className={this.getNavLinkClassName() + ''} as="li">
                                <a href="#">Home</a>
                            </Nav.Link>
                        </Nav>
                        {
                            this.state.genres?.map(genresItem =>
                                <DropDownItem title={genresItem.title}
                                    subGenresName={genresItem.subGenresName.reverse()} />)
                        }
                    </Container>
                </Navbar>
            </>
        )
    }
}

const styles = StyleSheet.create({
    subTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // position:'relative'
    },
});

