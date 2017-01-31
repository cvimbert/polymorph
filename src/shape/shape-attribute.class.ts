/**
 * Created by Christophe on 30/01/2017.
 */

export class ShapeAttribute<T> {

    constructor(
        public id:string,
        public defaultValue:T = null
    ) {}

    get type():string {
        return typeof this.defaultValue;
    }

    fromObject(dataObject:Object) {
        
    }
}