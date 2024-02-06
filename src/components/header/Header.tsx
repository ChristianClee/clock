import React, {useRef} from 'react';
import logo from '../../assets/pictures/jpg/myPicture.png'



const Header: React.FC = () => {
  const clock1 = useRef <HTMLAnchorElement>(null!)
  const clock2 = useRef <HTMLAnchorElement>(null!)
  const clock3 = useRef<HTMLAnchorElement>(null!)
  
  function saveSection(num:string) {
    sessionStorage.setItem("active", num)
  }
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__logo'>
            <div className='header__logo-picture'>
              <img className='ibg' src={logo} alt="no-picture" />
            </div>
            <h4>Ilya</h4>
          </div>
          <nav className='header__nav'>
          </nav>
        </div>
      </header>
    </>
    
  );
}
export default Header;