import styles from "./Menu.module.css"

function Menu(props) {
  const { options } = props;
  return (
    <div className = {styles.menuContainer}>
      <ul className = {styles.menuList}>
        {options.map((option, index) => (
          <li key={index}>
            <a href={option}>
              {option}
            </a>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;

