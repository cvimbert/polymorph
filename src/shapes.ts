/**
 * Created by Christophe on 31/01/2017.
 */

export var spriteShape = {
    attributes: {
        name: {
            type: "string",
            defaultvalue: "spritename",
            required: true
        },
        reference: {
            type: "reference",
            referencetype: "SpriteFileReference",
            required: true
        },
        x: {
            type: "number",
            defaultvalue: 0,
            required: true
        },
        y: {
            type: "number",
            defaultvalue: 0,
            required: true
        },
        scale: {
            type: "number",
            defaultvalue: 1,
            required: true
        }
    }
};