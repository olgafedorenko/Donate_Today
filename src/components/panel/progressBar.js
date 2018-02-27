import React, { Component } from 'react'

import Progress from 'react-progressbar';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props );
    }
    render () {
        return (
            <div>
                <Progress completed={this.props.complete} />
            </div>
        )
    }
}