
import { timeStamp } from 'console';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardItem extends Component{
    private cardPath:string;
    private label;
    private text;
    private src;



    constructor(props: any){
        super(props);
        this.label = props.label;
        this.text = props.text;
        this.src= props.src;
        this.cardPath = "";
    }

    private CardItem() {
        if (this.label === 'Adventure'){
            this.cardPath = 'https://www.rainforestcruises.com/guides/amazon-rainforest-attractions';
          }
          else if (this.label==='Sports') {
            this.cardPath='http://www.walkthroughindia.com/sports/top-12-best-himalayan-destinations-for-adventures-snow-sports-in-india/';
          }
          else if (this.label==='Luxury') {
            this.cardPath='https://www.hotels.com/go/indonesia/bali-extravagant-things-to-do';
          } 
          else if (this.label==='Mystery') {
            this.cardPath='https://www.vikingcruises.com/oceans/cruise-destinations/caribbean-americas/atlantic-crossing/index.html';
          }
          else if (this.label==='Adrenaline') {
            this.cardPath='https://www.getyourguide.com/sahara-desert-morocco-l10178/camel-riding-tours-tc178/';
          }
          else{
            this.cardPath = this.cardPath;
          }

          return(
              <>
                <li className = 'cards__item'>
                    <a target="_blank" href={this.cardPath}>
                        <figure className = 'cards__item__pic-wrap' data-category={this.label}>
                            <img 
                                className = "cards__item__img"
                                alt='Travel Image'
                                src={this.src}
                                
                            />
                        </figure>
                        <div className='cards__item'>
                            <h5 className='cards__item__text'>{this.text}</h5>
                        </div>
                    </a>
                </li>
              
              
              </>
          )
    }

    

}
