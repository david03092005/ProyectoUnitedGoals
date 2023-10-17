import styles from "./Menu.module.css"

function Menu(props) {
  const { options } = props;
  return (
    <div className = {styles.menuContainer}>
      <ul className = {styles.menuList}>
        {options.map((opcion) => (
          <li key={opcion.indice}>
            <a href={`#${opcion.indice}`}>
              {opcion.opcion}
            </a>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;

