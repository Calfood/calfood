var glp = require("./glpk/dist/glpk.js");
var express = require('express');
var bodyParser = require('body-parser');
const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    
    var post = req.url.split('/');
    console.log(post[1])

    if (post[1] == 'glpk') {

        var textResult = '';
        var start;
        //var logNode = document.getElementById("log");
        var log = glp_print_func = function(value){
            var now = new Date();
	        var d = (now.getTime() - start.getTime()) / 1000;
	        textResult += (value + "\n");
            if (d > 60) throw new Error("timeout");
	        console.log(value);
        };
       // function run(){
            start = new Date(); 
        //logNode.innerText = "";
            var text = 'Minimize\nobj: + '+post[2]+' x1 + '+post[3]+' x2 + '+post[4]+' x3\nSubject To\ncap: + x1 + x2 >= 4\nop: + x1 + x2 + x3 >= 4.25\nopa: + x3 <= 0.25\nBounds\nx1 >= 0\nx2 >= 0\nx3 >= 0\nGenerals\nx1\nx2\nx3\nEnd';

           // console.log(text);

            var lp = glp.glp_create_prob();
            //console.log(lp);
            glp.glp_read_lp_from_string(lp, true, text);

            glp.glp_scale_prob(lp, glp.GLP_SF_AUTO);

            var smcp = new glp.SMCP({presolve: glp.GLP_ON});
            glp.glp_simplex(lp, smcp);

            var iocp = new glp.IOCP({presolve: glp.GLP_ON});
            glp.glp_intopt(lp, iocp);

            log("obj: " + glp.glp_get_obj_val(lp));
            for(var i = 1; i <= glp.glp_get_num_cols(lp); i++){
                log(glp.glp_get_col_name(lp, i)  + " = " + glp.glp_get_col_prim(lp, i));
            }
        
            var retorno = {
                custo_minimo: glp.glp_get_obj_val(lp),
                leite: glp.glp_get_col_prim(lp, 1),
                racao:glp.glp_get_col_prim(lp, 2),
                feno: glp.glp_get_col_prim(lp, 3),
            }
       // }
       res.end(JSON.stringify(retorno));

    }else{
        res.end(req.url)
    }  
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})