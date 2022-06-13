import React, { Component } from 'react';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

class Cards extends Component{
    render(){
        return(
            <>
                <div className='cards'>
                    <h1>Check out these EPIC Destinations</h1>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <CardItem
                                src='images/img-9.jpeg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path= '/services'
                                />   
                                <CardItem
                                src='images/img-2.jpeg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/services'
                                />
                            </ul>
                            <ul className='cards__items'>
                                <CardItem
                                src='images/img-3.jpeg'
                                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                label='Mystery'
                                path='/services'
                                />
                                <CardItem
                                src='images/img-4.jpeg'
                                text='Experience Football on Top of the Himilayan Mountains'
                                label='Sports'
                                path='/products'
                                />
                                <CardItem
                                src='images/img-8.jpeg'
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='Adrenaline'
                                path='/sign-up'
                                />
                            </ul>
                        </div>

                    </div>
                
                
                </div>
            
            
            
            </>    



        );
    }
}