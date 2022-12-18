list = [[]];
x = [];
kind = breed = name = year = age = 0;
alert("Введите данные о вашем питомце")
y = 1;
c = 0;
while(y == 1){
    kind = prompt("Котик или собачка:");
    x.push(kind)
    breed = prompt("Порода:");
    x.push(breed)
    name = prompt("Кличка:");
    x.push(name)
    year = prompt("Год рождения:");
    x.push(year)
    age = prompt("Количество полных лет:");
    x.push(age)
    list.push(x)
    x = []
    c++;
    if(c <= 10){
        y = confirm("Желаете продолжить запись?")
    }
}
console.log(list)