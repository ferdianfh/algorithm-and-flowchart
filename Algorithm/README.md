# Algorithms!

## Case #1

> Inputkan sebuah String, kemudian urutkan terbalik String tersebut. Outputkan hasilnya!
> Contoh:
> Input: JavaScript
> Output: tpircSavaJ

**The algorithm** :

1. Start
2. Create **Function** with **parameter**
3. Declare **new variable** with empty string
4. Create a loop with **i = parameter.length - 1**, **i >= 0**, and **i-- .**
5. Assign **new variable += parameter[i]** inside loop
6. Return **new variable**
7. Print Function with String argument
8. End

## Case #2

> Diberikan sebuah teks, periksa apakah kata tersebut palidrom atau tidak. Misalnya teks "Malam", output = Palindrom.

**The algorithm** :

1. Start
2. Create **Function** with **parameter**
3. Declare **new variable** with empty string
4. Create a loop with **i = parameter.length - 1**, **i >= 0**, and **i-- .**
5. Assign **new variable += parameter[i]** inside loop
6. IF **new variable === parameter**, Return **"Palindrome"**
7. ELSE Return **"It's Not Palindrome"**
8. Print Function with String argument
9. End

## Case #3

> Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat "Saya belajar Javascript", output = "Javascript belajar Saya"

**The algorithm** :

1. Start
2. Create **Function** with **parameter**
3. Declare **firstVar** then assign with **parameter.split(" ")**
4. Declare **secondVar** then assign with empty array
5. Create a loop with **i = firstVar.length - 1**, **i >= 0**, and **i-- .**
6. Insert **firstVar** into **secondVar** with **secondVar.push(firstVar[i]);**
7. Return **secondVar.join(" ")**
8. Print Function with String Argument
9. End

## Case #4

> Diberikan sebuah kata Surabaya, ubah huruf "a" pada kata tersebut menjadi huruf "o". Sehingga output-nya menjadi Suroboyo.

**The algorithm** :

1. Start
2. Create **Function** with **parameter**
3. Declare **newVariable** and assign with Empty Array
4. Create a loop with **i = 0**, **i < parameter.length**, and **i++**
5. IF **parameter[i] === "a"**, Return **newVariable.push("o")**
6. ELSE Return **newVariable.push(parameter[i])**
7. Return **newVariable.join("")**
8. Print Function with String Argument
9. End
