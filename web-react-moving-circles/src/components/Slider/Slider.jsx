import styles from './Slider.module.css';

const Slider = (props) => {

    const handleInput = (event) => {
        if (props.onInput) {
            props.onInput({
                event,
                value: event.target.value
            });
        }
    }

    return (
        <div className={`${styles.Slider} ${props.className}`}>
            {
                props.label || <label>{props.label}</label>
            }
            <input
                type="range"
                min={props.min}
                max={props.max}
                value={props.value}
                onInput={handleInput}
            />
        </div>
    )
}

export default Slider;