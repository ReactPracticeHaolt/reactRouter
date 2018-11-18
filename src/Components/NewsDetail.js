import React, { Component } from 'react';
import data from './../data.json';
import NewsRelated from './NewsRelated';

class NewsDetail extends Component {
    render() {
      console.log(this.props.match.params.id);

      

        return (
            <div>
              {
                data.map((newsItem, key) => {
                  if (newsItem.id == this.props.match.params.id) {
                    return (
                      <div className="container">
                        <div className="row">
                          <div className="news-details">
                            <h5 className="news-item__title">
                              {newsItem.title}
                            </h5>
                            <p className="news-item__description">
                            {newsItem.content}
                            </p>
                            <img src={newsItem.imgURL}/>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              }
              
              <div className="container">
                <h2>News Related</h2>
                <div className="row">
                  {
                    data.map((newsItem, key) => {
                      if(newsItem.id != this.props.match.params.id ) {
                        if (key <= 3 ){
                          return (
                            <NewsRelated key={ newsItem.id } 
                              title= {newsItem.title}
                              id = {newsItem.id}
                              imgURL={newsItem.imgURL}
                              content={newsItem.content}
                            />
                          );
                        }

                      }
                    })
                  }
                </div>
              </div>
            </div>

        );
    }
}

export default NewsDetail;