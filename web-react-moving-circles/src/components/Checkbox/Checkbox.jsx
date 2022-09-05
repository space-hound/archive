import styles from './Checkbox.module.css';

const Checkbox = (props) => {
    
    const handleChange = (event) => {
        if(props.onChange) {
            props.onChange(event);
        }
    }

    return (
        <div className={`${styles.Checkbox} ${props.className}`}>
            {
                props.label && <label>{props.label}</label>
            }
            <input type="checkbox" checked={props.checked} onChange={handleChange} /> 
        </div>
    )
}

export default Checkbox;