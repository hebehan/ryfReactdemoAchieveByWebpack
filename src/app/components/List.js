import React, {Component} from 'react';
import ListItem from './ListItem'

class List extends Component {
    render() {
        var infos = this.props.data.map(function (info, index) {
            return <ListItem demoName={info} index={index}/>
        })
        return (
            <div>
                {infos}
            </div>
        );
    }
}

export default List;
