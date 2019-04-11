import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
    val: string
};

class Home extends Component<Props> {
    render() {
        return (
            <div>
                hello { this.props.val }
            </div>
        );
    }
}

export default Home;