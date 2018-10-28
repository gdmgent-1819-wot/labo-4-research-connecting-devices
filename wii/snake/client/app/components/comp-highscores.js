import Component from '@ember/component';

export default Component.extend({
    model: function () {
        let scores = this.store.findAll('score');
        return scores;
    },
});
