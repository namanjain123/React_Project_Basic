import React,{Componet} from "react"

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state={name: 'Naman'}
        console.log('LifeCycleA constructor')
    }
    static getDerivedState(props,state){
        console.log('LifeCycleA getDerivedState')
        return null
    }
    render(){
        console.log('LifeCycleA render')
        return <div>Lifecycle A</div>
    }

}
export default lifeCycleB