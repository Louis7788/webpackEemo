import React, { Component } from 'react';
import History from '../../commpant/history'

class TestOne extends Component {
    
    linkTo=()=>{
        History.push('test2');
        window.LinkChange(null,222,333,444);
    }
    render() {
        return (
            <div>
                test1

                <a href="javascript:void(0);" onClick={this.linkTo}>test2</a>
            </div>
        );
    }
}

export default TestOne;