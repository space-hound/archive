import styles from './Circle.module.css';

const Circle = (props) => {
    const style = {
        top: props.xP,
        left: props.yP,
        width: props.size,
        height: props.size,
        backgroundColor: `#${props.color}`,
        transform: `translate(-${props.dSize}px, -${props.dSize}px)`
    };
    return (
        <div
            className={styles.Circle}
            style={style}
        />
    );
}
export default Circle;