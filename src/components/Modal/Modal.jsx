import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css'

export const Modal = ({ urlPhoto, onClose }) => {
  useEffect(() => {
    hendleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  hendleBeckdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <div className={css.Overlay} onClick={hendleBeckdropClick}>
      <div className={css.Modal}>
        <img src={urlPhoto} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  urlPhoto: PropTypes.string.isRequired,
};