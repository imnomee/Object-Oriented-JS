class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }
    get activity() {
        const today = new Date();
        const hours = today.getHours();
        if (hours > 8 && hours <= 20) {
            return "Playing";
        } else {
            return "Sleeping";
        }
    }
    get owner() {
        return this._owner;
    }
    set owner(owner) {
        this._owner = owner;
        console.log(`Setter was called: ${owner}`);
    }
    speak() {
        console.log(this.sound);
    }
}

const ernie = new Pet("dog", 1, "pug", "yip yip");

const vera = new Pet("dog", 8, "Border Collie", "woof!");

const scofield = new Pet("dog", 6, "Doberman");

const edel = new Pet("dog", 7, "German Shorthaired Pointer");
ernie.owner = "nomee";

class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    set phone(phone) {
        const phoneNormalized = phone.replace(/[^\d]/g, "");
        this._phone = phoneNormalized;
    }

    get phone() {
        return this._phone;
    }
}

ernie.owner = new Owner("Nomee", "Dovey Road B13 9NS");
console.log(ernie.owner.name);

ernie.owner.phone = "1234no123456";
console.log(ernie.owner.phone);
