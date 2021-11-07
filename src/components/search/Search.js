import React, { Component } from 'react'
import { Input} from 'reactstrap'

export default class Search extends Component {
    render() {
        return (

            <div>
              
                <Input onChange={this.props.onChangeSearch} placeholder="enter the counter"/>
            
            </div>
        )
    }
}
