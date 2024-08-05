import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";

describe('Page Object Model 1nci Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
        homepagePom.navigate()
    });
    
});

