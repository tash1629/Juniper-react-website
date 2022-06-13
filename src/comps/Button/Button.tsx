
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Button extends Component{
    private styles = ['btn--primary', 'btn--outline'];
    private sizes = ['btn--medium', 'btn--large'];
    private children?;
    private type?;
    private onClick?;
    private buttonStyle;
    private buttonSize;



    constructor(props: any){
        super(props)
     
        this.children = props.children;
        this.type= props.type;
        this.onClick = props.onClick;
        this.buttonStyle = props.buttonStyle;
        this.buttonSize = props.buttonSize;

    }

    Button = () => {
        // check button style
        const checkButtonStyle = this.styles.includes(this.buttonStyle)
        ? this.buttonStyle
        : this.styles[0];

        // check button size
        const checkButtonSize = this.sizes.includes(this.buttonSize)
        ? this.buttonSize
        : this.sizes[0];

        return (
            <Link to='/sign-up' className='btn-mobile'>
              <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={this.onClick}
                type={this.type}
              >
                {this.children}
              </button>
            </Link>
          );

    
    
    
    }


}
