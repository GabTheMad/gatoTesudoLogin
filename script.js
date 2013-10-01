// Add your JavaScript below!
$(document).ready(function(){
    $("#bt").click(function(){
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;
        function validate(){
            if(login.length>23){
                alert("Nome muito grande");
            }else if(login==null||login==""){
                alert("Informe seu nome");
            }else if(senha.length>23){
                alert("Senha muito grande");
            }else if(senha==null||senha==""){
                alert("Informe sua senha");
            }else{
                document.write("<div>Bem vindo, "+login+"</div>");
            }
        }
        validate();
    })
})
