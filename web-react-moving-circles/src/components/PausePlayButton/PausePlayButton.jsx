const PausePlayButton = (props) => {

    return (
        <div className={props.className}>
            {
                props.isPlaying && <button id="pause">Pause</button>
            }
            {
                !props.isPlaying && <button id="play">Play</button>
            }
        </div>
    )
}

export default PausePlayButton;