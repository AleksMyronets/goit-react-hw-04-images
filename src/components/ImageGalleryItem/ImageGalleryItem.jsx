import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ picture, largeImageURL, onClick }) => {
    return  (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImg}
        onClick={() => onClick(largeImageURL)}
        src={picture}
        alt={picture.tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
