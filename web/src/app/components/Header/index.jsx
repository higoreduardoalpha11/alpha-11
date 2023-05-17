import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Button } from '@/app/components';
import logo from '@/assets/images/logo.svg';

import './index.css';

const Header = () => {
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <header className="header">
      <section className="container">
        <Link to="/" className="header--logo">
          <img src={logo} alt="Alpha 11" />
        </Link>

        <div className="header--icons-container">
          <Button type="button" title="Menu" content={<Icon icon="menu" />} color="none" variate="base" handleOnClick={() => setIsNavbar(!isNavbar)} />
        </div>

        <nav className={`header--navbar flex flex-row gap-10 ${isNavbar ? 'active' : ''}`}>
          <Button route="/" type="button" title="Início" content="Início" color="none" variate="sm" />
          <Button route="/portfolio" type="button" title="Portfólio" content="Portfólio" color="none" variate="sm" />
          <Button route="/sobre" type="button" title="Sobre" content="Sobre" color="none" variate="sm" />
        </nav>

        <div className="header--buttons-container flex flex-row gap-5">
          <Button route="/equipe" type="button" title="Equipe" content={<><Icon icon="time" /> Equipe</>} color="none" variate="sm" />
          <Button route="/contato" type="button" title="Contato" content={<><Icon icon="mail" /> Contato</>} color="none" variate="sm" />
        </div>
      </section>
    </header>
  )
}
export default Header;