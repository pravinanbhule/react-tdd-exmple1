import React,{Component} from 'react';
class Headline extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {header,desc} = this.props;
        if(!header){
            return null
        }
        return(
            <>    
                <h1 className="header" data-test="header">{header}</h1>
                <div className="description" data-test="description">{desc}</div>
            </>
        )
    }
} 
export default Headline;