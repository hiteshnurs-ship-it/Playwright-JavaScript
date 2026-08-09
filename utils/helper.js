export class Helper {

    getCurrentDate() {
        return new Date();
    }

    randomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    randomEmail() {
        return `user${Date.now()}@gmail.com`;
    }

}