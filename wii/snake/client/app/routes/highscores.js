import Route from '@ember/routing/route';

export default Route.extend({
    model: function () {
        let scores = this.store.findAll('score');
        return scores;
    },
    actions: {
        createPost() {
            var newPost = this.store.createRecord('score', {
                name: 'Pieter',
                score: 3
            });
            newPost.save();
        }
    }
});
