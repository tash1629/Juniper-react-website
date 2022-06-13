import { toHash } from 'ajv/dist/compile/util';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';





export default class Navbar extends Component{

  private clickAndButton;

  constructor(props){
    super(props);

    this.state = {
      click: false,
      button:true
    };

    this.clickAndButton = this.state;

    
  }

    
    private setClick(clickArg: boolean): void{
      this.clickAndButton.click = clickArg;
    } 

    protected handleClick = () => {
        this.setClick(!this.clickAndButton.click;);
    }

    private setButton(buttonArg: boolean):void{
      this.clickAndButton.button = buttonArg;
    }

    protected closeMobileMenu = () =>{
        this.setClick(!this.clickAndButton.click);
    }

    protected showButton = () => {
        if (window.innerWidth <= 960){
            this.setButton(false);
        }else{
            this.setButton(true);
        }
    }

    componentWillMount = () =>{
        // call showButton 
        this.showButton();
        window.addEventListener('resize', this.showButton);
    }
    
    public render(){
        return(
            <>
            
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={this.closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={this.handleClick}>
            <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={this.closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {<button/> && <Button buttonStyle='btn--outline'>SIGN UP</Button>}  
          
        </div>
      </nav>
    </>    
            
        );
    }

    // {<button/> && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    
   
    

}