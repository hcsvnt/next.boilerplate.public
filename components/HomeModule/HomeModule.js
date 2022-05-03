import styles from './styles.module.scss';

export default function HomeModule() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperBg} />
                <h1 className={styles.heading}>hcsvnt/next.boilerplate</h1>
                <p>a next js starter with scss, eslint, prettier and swiper</p>
            </div>
        </div>
    );
}
