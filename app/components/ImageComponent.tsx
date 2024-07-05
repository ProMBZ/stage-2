import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div style={styles.imageContainer}>
      <Image
        src="/four.png" 
        alt="Logo"
        width={200}
        height={50}
      />
    </div>
  );
};

const styles = {
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ImageComponent;