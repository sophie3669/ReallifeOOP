'use strict';

import { Building, ResidentialBuilding, CommercialBuilding, UtilityBuilding } from '../src/oop.js';
import chai  from 'chai';
const assert = chai.assert;

describe("Building Class:", function() {
    const building = new Building({location:'Egypt',value:2000000, width:675, length:976, builtDate: new Date('12/01/1898')});
    const residential_building = new ResidentialBuilding({location:'Abuja',value:5000000, width:975, length:776, builtDate: new Date('13/08/1998'), noOfApartments: 5, noOfOccupants: 4})
    const commercial_building = new CommercialBuilding({location:'Jos',value:5000000, width:9750, length:7776, builtDate: new Date('2/07/1808'), noOfOffices: 4})
    const utility_building = new UtilityBuilding({location:'Jos',value:5000000, width:9750, length:7776, builtDate: new Date('2/07/1808')});
    
    
    it("The building should be a type of object" , () => {
        assert.equal(typeof {}, typeof building);
    });
    
    it(`building should be an instance of the Building class,`, () => {
        assert.equal(true, building instanceof Building );
    });

    it(`residential_building should be an instance of the ResidentialBuilding class,`, () => {
        assert.equal(true, residential_building instanceof ResidentialBuilding );
    });

    it(`commercial_building should be an instance of the CommercialBuilding class,` , () => {
        assert.equal(true, commercial_building instanceof CommercialBuilding );
    });

    it(`dimension should return ${building.length} X ${building.width}`, () => {
        assert.equal(building.getDimension(),(`${building.length} X ${building.width}`));
    });

    it(`residential_building dimension should return ${residential_building.length} X ${residential_building.width}`, () => {
        assert.equal(residential_building.getDimension(),(`${residential_building.length} X ${residential_building.width}`));
    });

    it(`residential_building object should have inherited property`, () => {
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'builtDate'));
    });

    it(`Commercial building object should have inherited property`, () => {
        assert(Object.prototype.hasOwnProperty.call(commercial_building, 'builtDate'));
    });
    it(`should return "Building Completed on ${building.builtDate}." for getBuiltDate()`, () => {
        assert.equal(building.getBuiltDate(),`Building Completed on ${building.builtDate}.`);
    });   
    
    it(`residential_building object should have inherited property`, () => {
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'location'));
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'builtDate'));
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'length'));
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'width'));
        assert(Object.prototype.hasOwnProperty.call(residential_building, 'value'));
    });

    it(`residential_building should return "residential" for type property`, () => {
        assert.equal(residential_building.type, 'residential');
    }); 

    it(`commercial_building should return "commercial" for type property`, () => {
        assert.equal(commercial_building.type, 'commercial');
    }); 

    it(`utility_building should return "utility" for type property`, () => {
        assert.equal(utility_building.type, 'utility');
    }); 

    
})