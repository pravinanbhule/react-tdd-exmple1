import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
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
Headline.propTypes = {
    header: PropTypes.string,
    desc:PropTypes.string,
    userDetails:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        email:PropTypes.email,
        age:PropTypes.number,
        onlinestatus:PropTypes.bool
    }))
}
export default Headline;