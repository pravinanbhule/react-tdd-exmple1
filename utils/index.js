import  CheckPropTypes  from 'check-prop-types';
export const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}
export const checkProps = (component,expectedProps)=>{
    const propErr = CheckPropTypes(component.propTypes,expectedProps,'props',component.name)
    return propErr;
}