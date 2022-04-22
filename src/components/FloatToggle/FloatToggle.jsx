import styles from "./FloatToggle.module.css";
import {GrMenu} from 'react-icons/gr'

const FloatToggle = ({onClick}) => {

  return (
    <div className={styles.wrapper} onClick={onClick}>
     <GrMenu size={30} />
    </div>
  );
};

export default FloatToggle;
