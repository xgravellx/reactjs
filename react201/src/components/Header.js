import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ul>
            <li onClick={() => navigate(-1)}>Geri Git</li>
            <li>
                <Link to='/'>AnaSayfa</Link>
            </li>
            <li onClick={() => navigate('users')}>Kullanıcılar</li>
            <li onClick={() => navigate('contact')}>İletişim</li>
        </ul>
    </div>
  )
}

export default Header