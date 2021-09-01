import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'
import {findByTestAttr} from './../../../utils'
const setUp = (props={})=>{
    const component = shallow(<Header {...props} />)
    return component;
}

describe('Header component',()=>{
    let component;
    beforeEach(()=>{
        component = setUp();
    })
    test('Should render component',()=>{
        const wrapper = findByTestAttr(component,'HeaderComponent')
        expect(wrapper.length).toBe(1)
    })
    test('Should render logo Image',()=>{
        const wrapper = findByTestAttr(component,'LogoImage')
        expect(wrapper.length).toBe(1)
    })    
})
