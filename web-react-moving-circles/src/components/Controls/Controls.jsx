import styles from './Controls.module.css'

import Slider from '../Slider/Slider';
import Numeric from '../Numeric/Numeric';
import Checkbox from '../Checkbox/Checkbox';
import PausePlayButton from '../PausePlayButton/PausePlayButton';

const Controls = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.onAction) {
            props.onAction({
                event,
                type: event.nativeEvent.submitter.id
            });
        }
    }

    return (
        <form
            className={styles.Controls}
            onSubmit={handleSubmit} >

            <Numeric
                label="Circles:"
                value={props.circlesCount}
                onChange={props.onCirclesCountChange}
                className={styles.SpacedAfter}
            />
            
            <button
                id="render"
                className={styles.SpacedAfter}
            >
                Render
            </button>
            
            {
                props.isRendered && (
                    <button
                        id="clear"
                        className={styles.SpacedAfter}
                    >
                        Clear
                    </button>
                )
            }
            {
                props.isRendered && (
                    <PausePlayButton
                        isPlaying={props.isPlaying}
                        className={styles.SpacedAfter}
                    />
                )
            }
            {
                props.isRendered && props.isPlaying && (
                    <button
                        id="recolor"
                        className={styles.SpacedAfter}
                    >
                        Recolor
                    </button>
                )
            }
            {
                props.isRendered && props.isPlaying && (
                    <button
                        id="redirect"
                        className={styles.SpacedAfter}
                    >
                        Redirect
                    </button>
                )
            }
            {
                props.isRendered && props.isPlaying && (
                    <Slider
                        label="Speed:"
                        min="-100"
                        max="100"
                        value={props.speedModifier}
                        onInput={props.onCircleSpeedChange}
                        className={styles.SpacedAfter}
                    />
                )
            }
            {
                props.isRendered && props.isPlaying && (
                    <Slider
                        label="Size:"
                        min="-90"
                        max="90"
                        value={props.sizeModifier}
                        onInput={props.onCircleSizeChange}
                        className={styles.SpacedAfter}
                    />
                )
            }
            {
                props.isRendered && props.isPlaying && (
                    <Checkbox
                        className="spaced"
                        label="Brownian:"
                        checked={props.isBrownian}
                        onChange={props.onBrownianChange}
                        className={styles.SpacedAfter}
                    />
                )
            }
        </form>
    )
}

export default Controls;