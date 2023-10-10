import styles from "./Menu.module.css"
import { Link } from "react-router-dom";

function Menu(props) {
  const { options } = props;
  return (
    <div className = {styles.menuContainer}>
      <ul className = {styles.menuList}>
        {options.map((option, index) => (
          <li key={index}>
            <Link to='/Error404'>
              <a>
                {option}
              </a>
            </Link>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;

