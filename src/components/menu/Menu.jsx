import MenuItem from "../menu-item/MenuItem.jsx";

const Menu = ({ menuItems }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menuItems.length > 0
          ? menuItems.map((item) => (
              <li key={item.id}>
                <MenuItem menuItem={item} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Menu;
