/**
 * Created by Christophe on 30/01/2017.
 */
import {ShapeAttribute} from "./shape-attribute.class";

export class Shape {

    private _attributesIndex:{[id:string]:ShapeAttribute<any>} = {};

    constructor(
        public id:string = "",
        public attributes:ShapeAttribute<any>[] = []
    ) {
        for (let attribute of attributes) {
            this._attributesIndex[attribute.id] = attribute;
        }
    }

    pushAttribute(attribute:ShapeAttribute<any>) {
        this.attributes.push(attribute);
        this._attributesIndex[attribute.id] = attribute;
    }

    getAttribute(id:string):ShapeAttribute<any> {
        if (this._attributesIndex[id]) {
            return this._attributesIndex[id];
        }
    }

    fromObject(dataObject:Object) {
        for (let id in dataObject) {
            if (dataObject.hasOwnProperty(id)) {
                let data:Object = dataObject[id];

                switch (data["type"]) {

                    case "string":

                        break;

                    case "number":

                        break;

                    case "boolean":

                        break;

                    case "reference":

                        break;
                }
            }
        }
    }
}