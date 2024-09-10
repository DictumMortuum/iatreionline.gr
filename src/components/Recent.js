import ModalImage from "react-modal-image";
import ImageListItem from '@mui/material/ImageListItem';

const Service = ({ img }) => {
  return (
    <ImageListItem>
      <ModalImage small={img} large={img} alt="" />
    </ImageListItem>
  )
}

export default Service;
