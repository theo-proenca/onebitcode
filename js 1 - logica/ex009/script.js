let opcao = ""

do {
    opcao = prompt(
    "Escolha uma opção:\n" +
    "1. Calcular área de um triângulo\n" +
    "2. Calcular área de um retângulo\n" +
    "3. Calcular área de um quadrado\n" +
    "4. Calcular área de um trapézio\n" +
    "5. Calcular área de um círculo\n" +
    "6. Sair")

    switch (opcao){
        case "1":
            function tri() {
                x = parseFloat(prompt("Informe a base do triângulo"))
                y = parseFloat(prompt("Informe a altura do triângulo"))
                alert("A área do triângulo é " + ((x*y)/2))
            }
            tri()
            break
        case "2":
            function ret(){
                x = parseFloat(prompt("Informe a base do retângulo"))
                y = parseFloat(prompt("Informe a altura do retângulo"))
                alert("A área do retângulo é " + (x*y))
            }
            ret()
            break
        case "3":
            function quad() {
                x = parseFloat(prompt("Informe o lado do quadrado"))
                alert("A área do quadrado é " + x**2)
            }
            quad()
            break
        case "4":
            function trap(){
                x = parseFloat(prompt("Informe a base maior do trapézio"))
                y = parseFloat(prompt("Informe a base menor do trapézio"))
                z = parseFloat(prompt("Informe a altura do trapézio"))
                alert("A área do trapézio é " + ((x+y)*z/2))
            }
            trap()
            break
        case "5":
            function circ(){
                x = parseFloat(prompt("Informe o raio do círculo"))
                alert("A área do círculo é " + (3.14 * x**2))
            }
            circ()
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
    }
} while (opcao !== "6")