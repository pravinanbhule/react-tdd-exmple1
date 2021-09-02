import React from 'react';
import { shallow } from 'enzyme';
import Headline from '.';
import {findByTestAttr} from './../../../utils'

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>)
    return component
}
 describe('Headline Component',()=>{
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