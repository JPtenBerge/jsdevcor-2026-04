
import { bla, HomeComponent as homey } from './modules.js';
import ding from './modules.js';

console.log('bla:', bla);

console.log(new homey());

new ding().doeIets();


class Wow  {

    haalOp() {
        // lazy loading
        import('./dinges.js').then(x => {
            x.HomeComponent
        });
    }
}
