const mon = Math.floor(Math.random() * 3);
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Сергей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мариана",
            "id_2": "Татьяна",
            "id_3": "Ольга",
            "id_4": "Елена",
            "id_5": "Диана",
            "id_6": "Надежда",
            "id_7": "Милана",
            "id_8": "Любовь",
            "id_9": "Вера",
            "id_10": "Анна",
            "id_11": "Дура"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дмитриев",
            "id_2": "Михайлов",
            "id_3": "Николаев",
            "id_4": "Викторов",
            "id_5": "Иванов",
            "id_6": "Петров",
            "id_7": "Степанов",
            "id_8": "Артёмов",
            "id_9": "Сергеев",
            "id_10": "Олегов",
            "id_11": "Вячеславов"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Механик",
            "id_2": "Слесарь",
            "id_3": "Дальнобойщик",
            "id_4": "Космонавт",
            "id_5": "Пилот",
            "id_6": "Шахтёр",
            "id_7": "Геолог",
            "id_8": "Боксёр",
            "id_9": "Писатель",
            "id_10": "Водитель",
            "id_11": "Моряк"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Учительница",
            "id_2": "Секретарь",
            "id_3": "Поэтесса",
            "id_4": "Менеджер",
            "id_5": "Воспитательница",
            "id_6": "Уборщица",
            "id_7": "Космонавтка",
            "id_8": "Начальник",
            "id_9": "Прокурор",
            "id_10": "Дизайнер интерьеров",
            "id_11": "Мед.сестра"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
            
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

   
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return Math.floor(Math.random()*2) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomFirstName: function() {
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        }else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function() {
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        }else{
            return this.randomValue(this.surnameJson) + "а";
        }       
    },

    randomPatronymic: function(){
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.patronymicJson) + "ич";
        }else{
            return this.randomValue(this.patronymicJson) + "на";
        }       
    },
    
    randomMonth31: function randomMonth(){
        let months = [`января`, `марта`, `мая`, `июля`, `августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random()*7)];
        return month;
    },

    randomMonth30: function randomMonth(){
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random()*4)];
        return month;
    },

    randomMonth28: function randomMonth(){
        let month = `февряля`;
        return month;
    },

    randomBirthYear: function(min,max) {
                min = 1900;
                max = 2000;
                return Math.floor(Math.random() * (max - min + 1)) + min + ` года рождения`;
            },
            
    randomProfession: function(){
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.professionMaleJson);
        }else{
            return this.randomValue(this.professionFemaleJson);
        } 
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();      
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();      
        this.person.birthYear = this.randomBirthYear();       
        this.person.profession = this.randomProfession();

        if (mon === 0){
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        }else if (mon === 1){
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        }else if (mon === 2){
            this.person.month = this.randomMonth28();
            this.person.day = this.randomIntNumber(1, 28);
        }
        
       
        return this.person;
    }
};


