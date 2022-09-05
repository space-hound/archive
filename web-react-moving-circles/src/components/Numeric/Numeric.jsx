import styles from './Numeric.module.css'

const Numeric = (props) => {

    const handleChange = (event) => {
        if (props.onChange) {
            props.onChange({
                event,
                value: event.target.value
            });
        }
    }

    return (
        <div className={`${styles.Numeric} ${props.className}`}>
            {
                props.label || <label>{props.label}</label>
            }
            <input
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
}

export default Numeric;