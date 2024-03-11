import TreeList from '../../../../src/tree/List.mjs';

/**
 * @class Portal.view.learn.ContentTreeList
 * @extends Neo.container.Base
 */
class ContentTreeList extends TreeList {
    static config = {
        /**
         * @member {String} className='Portal.view.learn.ContentTreeList'
         * @protected
         */
        className: 'Portal.view.learn.ContentTreeList',
        /**
         * @member {Object} bind
         */
        bind: {
            contentPath: data => data.contentPath,
            store      : 'stores.contentTree'
        },
        /**
         * @member {String[]} cls=['topics-tree']
         */
        cls: ['topics-tree'],
        /**
         * @member {String|null} contentPath_=null
         */
        contentPath_: null,
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false
    }

    /**
     * Triggered after the contentPath config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     */
    afterSetContentPath(value, oldValue) {
        value && this.doLoadStore()
    }

    /**
     *
     */
    doLoadStore() {
        let me = this;

        Neo.Xhr.promiseJson({
            url: `${me.contentPath}/tree.json`
        }).then(data => {
            // TODO: Tree lists should do this themselves when their store is loaded.
            me.store.data = data.json.data;
            me.getModel().data.countPages = me.store.getCount();
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update()
        })
    }

    /**
     * @param {Object} record
     */
    onLeafItemClick(record) {
        super.onLeafItemClick(record);
        this.getModel().data.currentPageRecord = record
    }
}

Neo.setupClass(ContentTreeList);

export default ContentTreeList;
