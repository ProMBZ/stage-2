import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* <div style={styles.leftSection}>
        <ImageComponent />
      </div> */}
      <div style={styles.rightSection}>
        <TextComponent />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    width: '100%',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    background: 'transparent', // Left section transparent
    padding: '10px 20px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '50%',
    background: 'white', // Right section white
    padding: '10px 20px',
  },
};

export default Navbar;