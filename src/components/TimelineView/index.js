// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'


class TimelineView extends Component{    
    render(){
const {timelineItemsList}=this.props
return <Chrono items={timelineItemsList} />}
}

export default TimelineView