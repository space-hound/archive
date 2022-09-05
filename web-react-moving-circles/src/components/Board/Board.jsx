import React, { Component } from 'react';

import styles from './Board.module.css';

import { FRAMES, BROWNIAN } from '../../utils/options';
import ACTIONS from '../../utils/actions';

import Circle from '../Circle/Circle';
import Controls from '../Controls/Controls';

export default class Board extends Component {

    state = {
        isRendered: false,
        isPlaying: false,
        isBrownian: false,
        speedModifier: 0,
        sizeModifier: 0,
        circlesCount: 75,
        circles: [],
        xBound: 0,
        yBound: 0
    }

    constructor(props) {
        super(props);

        this.interval = null;
        this.brownianInterval = null;

        this.$board = React.createRef();

        this.handleAction = this.handleAction.bind(this);
        this.handleModSize = this.handleModSize.bind(this);
        this.handleModSpeed = this.handleModSpeed.bind(this);
        this.handleBrownianChange = this.handleBrownianChange.bind(this);
        this.handleBoardSizeChange = this.handleBoardSizeChange.bind(this);
        this.handleCircleCountChange = this.handleCircleCountChange.bind(this);

        this.boundsobserver = new ResizeObserver(this.handleBoardSizeChange);
    }

    render() {
        return (
            <div className={styles.Board}>
                <Controls
                    {...this.state}
                    onAction={this.handleAction}
                    onCircleSizeChange={this.handleModSize}
                    onCircleSpeedChange={this.handleModSpeed}
                    onBrownianChange={this.handleBrownianChange}
                    onCirclesCountChange={this.handleCircleCountChange}
                />
                <div className={styles.InnerBoard} ref={this.$board}>
                    {
                        this.state.circles.map((circle, index) => (
                            <Circle
                                key={index}
                                {...circle}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setBounds();
        this.boundsobserver.observe(this.$board.current);
    }

    setBounds() {
        const computedStyles = window.getComputedStyle(this.$board.current);
        this.setState({
            xBound: parseInt(computedStyles.height),
            yBound: parseInt(computedStyles.width)
        });
    }

    setInterval() {
        this.interval = setInterval(() => {
            if(this.state.isPlaying) {
                ACTIONS.moveCircles(this.state);
                this.setState({ circles: this.state.circles });
            }
        }, FRAMES);
        this.brownianInterval = setInterval(() => {
            if (this.state.isPlaying && this.state.isBrownian) {
                this.handleModDir();
            }
        }, BROWNIAN);
    }

    handleBoardSizeChange () {
        this.setBounds();
    }

    handleAction({event, type}) {
        switch (type) {
            case "render": this.handleRender();
                break;
            case "play": this.handlePlay();
                break;
            case "pause": this.handlePause();
                break;
            case "clear": this.handleClear();
                break;
            case "recolor": this.handleModColor();
                break;
            case "redirect": this.handleModDir();
                break;
            case "brownian": this.handleBrownian();
                break;
            default:
                break;
        }
    }

    handlePlay() {
        this.setState({ isPlaying: true });
    }

    handlePause() {
        this.setState({ isPlaying: false });
    }

    handleClear() {
        clearInterval(this.interval);
        clearInterval(this.brownianInterval);
        this.setState({
            isRendered: false,
            isPlaying: false,
            isBrownian: false,
            speedModifier: 0,
            sizeModifier: 0,
            circles: []
        });
    }

    handleRender() {
        this.handleClear();
        this.setState({
            isPlaying: true,
            isRendered: true,
            circles: ACTIONS.createCircles(this.state)
        }, this.setInterval.bind(this));
    }

    handleBrownianChange (event) {
        this.setState({ isBrownian: !this.state.isBrownian });
    }

    handleModDir(event) {
        ACTIONS.modCircles("modDir", undefined, this.state);
        this.setState({ circles: this.state.circles });
    }

    handleModSize({event, value}) {
        ACTIONS.modCircles("modSize", parseInt(value), this.state);
        this.setState({
            sizeModifier: value,
            circles: this.state.circles
        });
    }

    handleModSpeed({event, value}) {
        ACTIONS.modCircles("modSpeed", parseInt(value), this.state);
        this.setState({
            speedModifier: value,
            circles: this.state.circles
        });
    }

    handleModColor() {
        ACTIONS.modCircles("modColor", undefined, this.state);
        this.setState({ circles: this.state.circles });
    }

    handleCircleCountChange({event, value}) {
        this.setState({ circlesCount: parseInt(value) || "" });
    }
}
