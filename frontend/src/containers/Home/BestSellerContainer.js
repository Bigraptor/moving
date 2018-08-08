import React, { Component, Fragment } from "react";
import BestSeller from "components/Home/BestSeller";

import * as bookAPI from "lib/api/book";

class BestSellerContainer extends Component{

    state = {
        books: []
    };

    componentDidMount(){
        this.getBestseller();
    }

    getBestseller = async () => {
        let result = await bookAPI.getBestseller();
        this.setState({
            books: result.data.result.item.slice(0,6)
        });
        console.log(this.state.books)
    }

    render(){

        const {books} = this.state;
        const bookslist = books.map( (a) => {
            return <BestSeller author = {a.author} cover = {a.coverLargeUrl} title = {a.title} rank = {a.customerReviewRank} />
        })

        return(
            <Fragment>
                {bookslist}
            </Fragment>
        );
    };
};

export default BestSellerContainer;