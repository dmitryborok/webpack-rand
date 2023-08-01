import userTemplate from './templates/user-template.handlebars';
import meatTemplate from './templates/meat-template.handlebars';
import pokemonTemplate from './templates/pokemon-template.handlebars';
import userFriendsTemplate from './templates/user-friends-template.handlebars';
import quoteTemplate from './templates/quote-template.handlebars';
 

export class Renderer {
    renderUsers(users) {
        let newHTML = userTemplate(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        let friendsHTML = userFriendsTemplate({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        let quoteHTML = quoteTemplate(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        let pokemonHTML = pokemonTemplate(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        let meatHTML = meatTemplate({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}
