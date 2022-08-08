import Model from '../../data/Model.mjs';

/**
 * @class Neo.sitemap.model.Item
 * @extends Neo.data.Model
 */
class Item extends Model {
    static getConfig() {return {
        /*
         * @member {String} className='Neo.sitemap.model.Item'
         * @protected
         */
        className: 'Neo.sitemap.model.Item',
        /*
         * @member {Object[]} fields
         */
        fields: [{
            name: 'action',
            type: 'String'
        }, {
            name        : 'actionType',
            defaultValue: 'route',
            type        : 'String'
        }, {
            name: 'column',
            type: 'Number' // zero based
        }, {
            name        : 'disabled',
            defaultValue: false,
            type        : 'Boolean'
        }, {
            name        : 'hidden',
            defaultValue: false,
            type        : 'Boolean'
        }, {
            name: 'id',
            type: 'Number'
        }, {
            name        : 'level', // indentation
            defaultValue: 0,
            type        : 'Number'
        }, {
            name: 'name',
            type: 'Html'
        }]
    }}
}

Neo.applyClassConfig(Item);

export default Item;
