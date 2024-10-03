import { TypographyProps } from './Typography.props';
import styles from './Typography.module.css';

const Typography = ({
  children,
  variant = 'body1',
  ...props
}: TypographyProps) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      );
    case 'body1':
      return (
        <p className={styles.body1} {...props}>
          {children}
        </p>
      );
    case 'body2':
      return (
        <p className={styles.body2} {...props}>
          {children}
        </p>
      );
    case 'caption':
      return (
        <p className={styles.caption} {...props}>
          {children}
        </p>
      );
    default:
      return (
        <p className={styles.body1} {...props}>
          {children}
        </p>
      );
  }
};

export default Typography;
