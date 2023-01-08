class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        }

        let obj = {
            articleModel: articleModel.toLowerCase(),
            articleName: articleName,
            quantity: quantity
        }
        this.listOfArticles.push(obj);

        for (const articleObj of this.listOfArticles) {
            if (articleName == articleObj.articleName && articleModel == articleObj.articleModel) {
                articleObj.quantity = articleObj.quantity + quantity;
            }

        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {
        for (const guest of this.guests) {
            let guestValuesArr = Object.values(guest)
            if (guestValuesArr.includes(guestName)) {
                throw new Error(`${guestName} has already been invited.`);
            }

        }

        let points = 50;

        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        }


        let guestObj = {
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        }
        this.guests.push(guestObj);
        return `You have successfully invited ${guestName}!`;

    }

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria == 'article') {

            result.push("Articles information:");
            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
        }

        if (criteria == 'guest') {
            result.push("Guests information:");
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }

        return result.join('\n');


    }


}






// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));



const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
