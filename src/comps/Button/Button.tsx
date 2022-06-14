
import React, { Component } from 'react';
import {Link} from 'react-router-dom';



// add an interface containing all attribues/props used in the Button class
interface ButtonAttributes{
  type: any,
  onClick(): any,
  buttonStyle: string,
  buttonSize: string, 
  children: string
}

interface ButtonProps{
  buttonType: ButtonAttributes[];
}




export default class Button extends Component<ButtonProps, any>{
    private styles = ['btn--primary', 'btn--outline'];
    private sizes = ['btn--medium', 'btn--large'];
    
    constructor(props: any){
        super(props);
    }

    Button = ({buttonType}: ButtonProps) => {
        // check button style
        {buttonType.map(buttonAttr => {
          const checkButtonStyle = this.styles.includes(buttonAttr.buttonStyle)
        ? buttonAttr.buttonStyle
        : this.styles[0];

        // check button size
        const checkButtonSize = this.sizes.includes(buttonAttr.buttonSize)
        ? buttonAttr.buttonSize
        : this.sizes[0];

        return (
            <Link to='/sign-up' className='btn-mobile'>
              <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={buttonAttr.onClick}
                type={buttonAttr.type}
              >
                {buttonAttr.children}
              </button>
            </Link>
          );




        })}

    
    
    
    }


}
