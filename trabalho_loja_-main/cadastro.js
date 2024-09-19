function cadastro_cliente(){
    const cl_al=document.getElementById('nome_cliente').value
    const el_al=document.getElementById('email_cliente').value
    const sh_al=document.getElementById('senha_cliente').value
    const tl_al=document.getElementById('telefone_cliente').value

    document.getElementById('mostra_nome').innerText=cl_al;
    document.getElementById('mostra_email').innerText=el_al;
    document.getElementById('mostra_senha').innerText=sh_al;
    document.getElementById('mostra_telefone').innerText=tl_al
}