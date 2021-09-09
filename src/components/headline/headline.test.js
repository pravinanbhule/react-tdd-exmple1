import React from 'react';
import { shallow } from 'enzyme';
import Headline from '.';
import {findByTestAttr,checkProps} from './../../../utils'
import PropTypes from 'prop-types'


const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>)
    console.log(component)
    return component
}
 describe('Headline Component',()=>{
     describe('Checking proptypes',()=>{
         it('should render with correct proptypes',()=>{
            const expectedProps = {
                header:'temp header',
                desc:'temp desc',
                userDetails: [{
                    name:'name',
                    email:'email@email.com',
                    age:10,
                    onlinestatus:false
                }]
            }
            const propTypeError = checkProps(Headline,expectedProps)
            expect(propTypeError).toBeUndefined()
         })
     })
     describe('Should render with props',()=>{
         let component;
        beforeEach(()=>{
            const props = {header:'Header Text',desc:'Description Text'}
            component = setUp(props)
        })
        it("Should Render Header",()=>{
            const header = findByTestAttr(component,'header');
            expect(header.length).toBe(1);
        })
        it("Should render Description",()=>{
            const desc = findByTestAttr(component,'description');
            expect(desc.length).toBe(1);
        })
     })
     describe('Should render without props',()=>{
         let component;
         beforeEach(()=>{
             component = setUp()
         })
         it('Should not render Header',()=>{
             const header = findByTestAttr(component,'header');
             expect(header.length).toBe(0)
         })
         it('Should not render description',()=>{
             const desc = findByTestAttr(component,'desc');
             expect(desc.length).toBe(0)
         })
     })
 })