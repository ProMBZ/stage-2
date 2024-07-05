import Link from 'next/link';

const TextComponent = () => {
  return (
    <div style={styles.loginContainer}>
      <Link href="/login">
        <div style={styles.loginText}>
          Log in
          <span style={styles.arrow}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: '14px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // This pushes the login text to the right
  },
  arrow: {
    marginLeft: '12px',
    transition: 'transform 0.2s ease',
  },
};

export default TextComponent;