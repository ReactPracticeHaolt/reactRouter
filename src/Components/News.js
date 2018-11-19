import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './../data.json';


class News extends Component {
    
    render() {
        //console.log(data);
        return (
            <div className="container">
                <div className="row">
                    {
                        data.map((newItem, key) => {
                            return (
                            <NewsItem key = {newItem.id} 
                                title= {newItem.title}
                                id = {newItem.id}
                                imgURL={newItem.imgURL}
                                content={newItem.content}
                            />
                        )})
                    }
                </div>
            </div>

        );
    }
}

export default News;