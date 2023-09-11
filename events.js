var eventos = ()=>{
    /* ---------- FUNÇÕES ----------- */
    var show_dadosgerais = ()=>{
        main.mc_dados.gotoAndPlay('dados_gerais')
    }
    var show_meioambiente = ()=>{
        main.mc_dados.gotoAndPlay('meio_ambiente')
    }
    var show_saude = ()=>{
        main.mc_dados.gotoAndPlay('saude')
    }
    var show_educacao = ()=>{
        main.mc_dados.gotoAndPlay('educacao')
    }
    var show_economia = ()=>{
        main.mc_dados.gotoAndPlay('economia')
    }
    var show_trabalho_renda = ()=>{
        main.mc_dados.gotoAndPlay('trabalho_renda')
    }
    var fechar_dados = ()=>{
        main.mc_dados.gotoAndStop(0)
    }
    
    /* ---------- EVENTOS ----------- */
    //biblioteca de objetos
	var main = exportRoot;
	// habilita interações touch
	createjs.Touch.enable(stage);

    main.mc_dados.btn_fechar.addEventListener('click', fechar_dados)
    main.bt_economia.addEventListener('click', show_economia)
    main.bt_trabrenda.addEventListener('click', show_trabalho_renda)
    main.bt_educacao.addEventListener('click', show_educacao)
    main.bt_saude.addEventListener('click', show_saude)
    main.bt_meioambiente.addEventListener('click', show_meioambiente)
    main.bt_dados_gerais.addEventListener('click', show_dadosgerais)
    
}

