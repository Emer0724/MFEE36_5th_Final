import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from '@/components/common/CBtn/btnmenu.module.css'





export default function CouponSelectMenu({ lightbtncontent, options }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowMenu(false);
  };

  return (
    <div className={s.btnmenucontain} >
        <div className={s.btnmenurow}>
          <p>{selectedOption}</p>
          <button className={s.btnmenu} onClick={toggleMenu}>
              {lightbtncontent}
          </button>
        </div>  
      {showMenu && (
        <div className={s.menuStyle}>
          {options.map((option, index) => (
            <div key={index} className={s.options}  onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CouponSelectMenu.propTypes = {
  lightbtncontent: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};