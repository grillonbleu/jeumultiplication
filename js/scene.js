arithmepique.scene = {};
arithmepique.scene.etats = {};



arithmepique.scene.etats.Depart = function(scene) {
    console.log("état départ");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Depart").removeClass("inactif");
    
    var that = this;
    jQuery(".Depart button").on("click.arithmepique", function() {
        that.surDemarrage();
    });
    
    var operations = this.scene.script.operations;
    var nb_operations = {};
    for(var ii = 0; ii < operations.length; ++ii) {
        var operateur = operations[ii].split(" ")[1];
        if(!(operateur in nb_operations)) {
            nb_operations[operateur] = 1;
        } else {
            ++nb_operations[operateur];
        }
    }
    
    var tableau_resume = jQuery(".Depart .resume-scene");
    var modele_rangee = tableau_resume.find("tr.modele-scene").removeClass("modele-scene").remove();
    
    jQuery(".info h1").text(this.scene.script.titre);
    
    for(var operateur in this.scene.script.monstres) {
        if(!(operateur in nb_operations)) continue;
        var nom_monstre = this.scene.script.monstres[operateur];
        
        if(!(nom_monstre instanceof Array)) {
            nom_monstre = [nom_monstre];
        }
        
        var html_sprites = "";
        for(var ii = 0; ii < nom_monstre.length; ++ii) {
            html_sprites += sprintf('<span class="%s"><span class="sprite"></span></span>', nom_monstre[ii]);
        }

        var rangee = modele_rangee.clone();

        rangee
            .find(".cell-monstre").append(html_sprites)
            //.find(".op").text(operateur).end()
            .end()
            .find(".cell-op").text(operateur).end()
            .find(".cell-nb").text(nb_operations[operateur]).end()
            .appendTo(tableau_resume);
    }
};
arithmepique.scene.etats.Depart.prototype = {
    surDemarrage: function() {
        this.scene.etat = new arithmepique.scene.etats.TrDepart(this.scene);
    }
};



arithmepique.scene.etats.TrDepart = function(scene) {
    console.log("état trdépart");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".TrDepart").removeClass("inactif");    
    
    this.scene.affichePersonnages(jQuery(".TrDepart .combat"));
    
    var largeur_fenetre = jQuery(window).width();
    
    var wrap_heros = jQuery(".TrDepart .wrap-heros")
            .css("left", -largeur_fenetre/2)
            .addClass("heros-arrivent");
    var wrap_monstres = jQuery(".TrDepart .wrap-monstres")
            .css("left", largeur_fenetre/2)
            .addClass("monstres-arrivent");
    
    var that = this;
    wrap_heros.one(arithmepique.animEnd, function(evt) {
        wrap_heros.css("left", "");
        wrap_monstres.css("left", "");
        that.surFin();
    });
};
arithmepique.scene.etats.TrDepart.prototype = {
    surFin: function() {
        this.scene.etat = new arithmepique.scene.etats.Question(this.scene);
    }
};



arithmepique.scene.etats.Question = function(scene) {
    console.log("état question");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Question").removeClass("inactif");
    
    this.equation = this.scene.script.operations[this.scene.monstres[0]];
    jQuery(".equation .question").text(this.equation.replace("*", "×"));
    
    this.scene.affichePersonnages(jQuery(".Question .combat"));
    
    var that = this;
    var cumul = "";
    var noeud_saisie = jQuery(".Question .clavier-numerique .saisie");
    jQuery(".Question .clavier-numerique button.reponse").on("click.arithmepique", function() {
        if(this.value === "E") {
            noeud_saisie.text("");
            that.surBoutonReponse(cumul);
        } else if(this.value === "X") {
            cumul = "";
            noeud_saisie.text("");
        } else {
            cumul += this.value;
            noeud_saisie.text(cumul);
        }
        
    });
    
    jQuery("body").on("keypress.arithmepique", function(event) {
        
        if(48 <= event.which && event.which <= 57) {
            console.log(event);
            cumul += event.key;
            noeud_saisie.text(cumul);
        }
        
        if("Enter" === event.key) {
            console.log(event);
            noeud_saisie.text("");
            that.surBoutonReponse(cumul); 
            event.preventDefault();
        }
        
        return true;
    });
    
    jQuery('html').on("keydown.arithmepique", function(event){
        
        if(8 === event.keyCode || 46 === event.keyCode) {
           cumul = "";
           noeud_saisie.text("");
           event.preventDefault();
        }
    });
    
    if(this.scene.script.chrono) {
        this.debutChrono = (new Date).getTime();

        this.intervalId = setInterval(function() {
            that.majChrono();
        }, 50);        
    } else {
        jQuery(".chrono").hide();
    }
};
arithmepique.scene.etats.Question.prototype = {
    surBoutonReponse: function(valeur) {
        console.log("réponse donnée : " + valeur);
        
        this.debranche();
        
        //Bonne réponse
        if(arithmepique.calc(this.equation)+"" === valeur) {
            this.scene.etat = new arithmepique.scene.etats.Bon(this.scene);
            
        //Mauvaise réponse
        } else {
            this.scene.etat = new arithmepique.scene.etats.Mauvais(this.scene, valeur);
        }
    },
    
    
    
    obtientMillisecsRestants: function() {
        var nb_millisecs_ecoules = (new Date).getTime() - this.debutChrono;
        return this.scene.dureeMillisecsChrono - nb_millisecs_ecoules;
    },
    
    
    
    majChrono: function() {
        var ms_restants = this.obtientMillisecsRestants();
        
        if(0 > ms_restants) {
            //Temps écoulé
            this.debranche();
            this.scene.etat = new arithmepique.scene.etats.ChronoEpuise(this.scene);
        } else {
            var pourcentage = (ms_restants / this.scene.dureeMillisecsChrono) * 100;
            
            if(pourcentage < 40) {
                this.scene.reponseLente = true;
                jQuery(".chrono .temps-restant").addClass("urgent");
            }
            
            jQuery(".chrono .temps-restant").css("width", pourcentage + "%");
        }
    },
    
    debranche: function() {
        jQuery(".Question .clavier-numerique button.reponse").off("click.arithmepique");
        jQuery("body").off("keypress.arithmepique");
        clearInterval(this.intervalId);
        jQuery(".chrono .temps-restant").removeClass("urgent");
    }
};



arithmepique.scene.etats.Bon = function(scene) {
    console.log("état bon");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Bon").removeClass("inactif");
    
    this.scene.audio.jouerSon("attaque");

    this.equation = this.scene.script.operations[this.scene.monstres[0]];
    jQuery(".equation .question").text(this.equation.replace("*", "×"));
    jQuery(".equation .reponse").text(arithmepique.calc(this.equation));

    var combat = jQuery(".Bon .combat");
    this.scene.affichePersonnages(combat);
    
    this.animHeros(combat);
    this.animMonstres(combat);
        
    var that = this;
    setTimeout(function() {
        that.termine();
    }, 3500);
};
arithmepique.scene.etats.Bon.prototype = {
    animHeros: function(combat) {
        var heros = combat.find(".heros").addClass("fetent");
        var tete = heros.find("> span").last();
        var largeur_tete = tete.outerWidth();
        
        heros.css("paddingRight", largeur_tete + "px");
        
        //le héros en tête de file attaque
        tete.addClass("attaque")
            .one(arithmepique.animEnd, function(evt) {
                evt.stopPropagation();
                tete.removeClass("attaque");

                //Aller à l'arrière de la file
                tete.addClass("va-arriere flip-h")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                        
                        tete.removeClass("va-arriere flip-h")
                            .prependTo(combat.find(".heros"))
                            .css("position", "static");
                });
                
                //les autres heros s'avancent
                heros.removeClass("fetent").addClass("avancent")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                        
                        heros.css("paddingRight", "");
                        heros.removeClass("avancent");
                });
                
            });
    },
    
    animMonstres: function(combat) {
        var monstres = combat.find(".monstres").addClass("pleurent");
        var tete = monstres.find("> span").first();
        var largeur_tete = tete.outerWidth();
        monstres.css("paddingLeft", largeur_tete + "px");
        
        //Monstre battu
        tete.addClass("battu")
            .one(arithmepique.animEnd, function(evt) {
                evt.stopPropagation();
                
                tete.remove();
                
                //Les autres monstres avancent
                monstres.removeClass("pleurent").addClass("avancent")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                
                        monstres.css("paddingLeft", "");
                        monstres.removeClass("avancent");
                });
        });
    },
    
    termine: function() {
        this.scene.monstres.shift();
        
        var hero = this.scene.heros.shift();
        this.scene.heros.push(hero);
        
        if(0 === this.scene.monstres.length) {
            this.scene.etat = new arithmepique.scene.etats.Complete(this.scene);
        } else {
            this.scene.etat = new arithmepique.scene.etats.Question(this.scene);
        }
    }
};


arithmepique.scene.etats.Mauvais = function(scene, reponse_donnee) {
    console.log("état mauvais");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Mauvais").removeClass("inactif");
    
    this.scene.audio.jouerSon("battu");

    this.equation = this.scene.script.operations[this.scene.monstres[0]];
    jQuery(".equation .question").text(this.equation.replace("*", "×"));
    jQuery(".equation .reponse-correcte").text(arithmepique.calc(this.equation));
    jQuery(".equation .reponse-donnee").text(reponse_donnee);

    
    jQuery(".equation .reponse-donnee").css("visibility", "visible").addClass("anim").one(arithmepique.animEnd, function(evt) {
        evt.stopPropagation();
        jQuery(this).removeClass("anim");
        //@todo figure out animations and remove this
        jQuery(this).css("visibility", "hidden");
    });

    var combat = jQuery(".Mauvais .combat");
    this.scene.affichePersonnages(combat);

    this.animHeros(combat);
    this.animMonstres(combat);
    
    var that = this;
    setTimeout(function() {
        that.termine();
    }, 5000);
};
arithmepique.scene.etats.Mauvais.prototype = {
    termine: function() {
        this.scene.heros.shift();
        
        var monstre = this.scene.monstres.shift();
        this.scene.monstres.push(monstre);
        
        if(0 === this.scene.heros.length) {
            this.scene.etat = new arithmepique.scene.etats.Echec(this.scene);
        } else {
            this.scene.etat = new arithmepique.scene.etats.Question(this.scene);
        }
    },
    
    animHeros: function(combat) {
        var heros = combat.find(".heros").addClass("pleurent");
        var tete = heros.find("> span").last();
        var largeur_tete = tete.outerWidth();
        heros.css("paddingRight", largeur_tete + "px");
        
        //Héro battu
        tete.addClass("battu")
            .one(arithmepique.animEnd, function(evt) {
                evt.stopPropagation();
        
                tete.remove();
                
                //les autres heros s'avancent
                heros.removeClass("pleurent").addClass("avancent")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                        
                        heros.css("paddingRight", "");
                        heros.removeClass("avancent");
                });

            });    
    },
    
    animMonstres: function(combat) {
        var monstres = combat.find(".monstres").addClass("pleurent");
        var tete = monstres.find("> span").first();
        var largeur_tete = tete.outerWidth();
        monstres.css("paddingLeft", largeur_tete + "px");

        //le monstre en tête de file attaque
        tete.addClass("attaque")
            .one(arithmepique.animEnd, function(evt) {
                evt.stopPropagation();
        
                tete.removeClass("attaque");
                
                //Aller à l'arrière de la file
                tete.addClass("va-arriere flip-h")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                        
                        tete.removeClass("va-arriere flip-h")
                            .appendTo(combat.find(".monstres"))
                            .css("position", "static");
                });
                
                //les autres monstres s'avancent
                monstres.removeClass("fetent").addClass("avancent")
                    .one(arithmepique.animEnd, function(evt) {
                        evt.stopPropagation();
                        
                        monstres.css("paddingLeft", "");
                        monstres.removeClass("avancent");
                });

            });
    }
};


arithmepique.scene.etats.ChronoEpuise = function(scene) {
    console.log("état chrono");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".ChronoEpuise").removeClass("inactif");

    this.scene.audio.jouerSon("battu");

    this.equation = this.scene.script.operations[this.scene.monstres[0]];
    jQuery(".equation .question").text(this.equation.replace("*", "×"));
    jQuery(".equation .reponse").text(arithmepique.calc(this.equation));

    this.scene.affichePersonnages(jQuery(".ChronoEpuise .combat"));
    var combat = jQuery(".ChronoEpuise .combat");

    this.animHeros(combat);
    this.animMonstres(combat);
    
    var that = this;
    setTimeout(function() {
        that.termine();
    }, 5000);
};
arithmepique.scene.etats.ChronoEpuise.prototype = {
    termine: arithmepique.scene.etats.Mauvais.prototype.termine,
    animHeros: arithmepique.scene.etats.Mauvais.prototype.animHeros,
    animMonstres: arithmepique.scene.etats.Mauvais.prototype.animMonstres
};



arithmepique.scene.etats.Complete = function(scene) {
    console.log("état complete");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Complete").removeClass("inactif");

    this.scene.audio.jouerSon("victoire");

    //Étoiles et commentaires
    jQuery(".Complete .commentaire").hide();

    var nb_etoiles_total = this.scene.script.chrono ?
        3 : 2;
    var nb_etoiles_recues = 1;
    if(this.scene.heros.length === 5) {
        nb_etoiles_recues = 2;
        
        if(this.scene.script.chrono && !this.scene.reponseLente) {
            nb_etoiles_recues = 3;
        }
    }
    
    var joueurs = new arithmepique.Joueurs();
    var nom_joueur = joueurs.obtientNomJoueurSession();
    joueurs.ajouteEtoilesJoueur(nom_joueur, this.scene.script.id, nb_etoiles_recues);
    
    if(nb_etoiles_recues === nb_etoiles_total) {
        jQuery(".Complete .commentaire-1").show();
    } else if(this.scene.heros.length < 5) {
        jQuery(".Complete .commentaire-2").show();
    } else if(this.scene.script.chrono && !this.scene.reponseLente) {
        jQuery(".Complete .commentaire-3").show();
    }
    
    var etoiles = jQuery(".Complete .etoiles span");
    
    for(var ii = 0; ii < etoiles.length; ++ii) {
        if(ii === nb_etoiles_total) {
            etoiles.eq(ii).hide();
            continue;
        }
        
        if(ii < nb_etoiles_recues) {
            etoiles.eq(ii).addClass("gagnee");
        }
    }
};



arithmepique.scene.etats.Echec = function(scene) {
    console.log("état echec");
    this.scene = scene;
    jQuery(".etats > div").addClass("inactif");
    jQuery(".Echec").removeClass("inactif");

};


//TODO
arithmepique.scene.etats.Pause = function(scene) {
    this.scene = scene;
};



//Classe Scene
arithmepique.scene.Scene = function(script_id) {
    var scenes = new arithmepique.Scenes;
    this.script = scenes.obtientSceneParId(script_id);
    
    this.audio = new arithmepique.Audio();
    this.audio.ajouteBouton();
    
    
    if(this.script.estBoss) {
        jQuery("body").addClass("est-boss");
        this.audio.jouerMusique("boss");
    } else {
        this.audio.jouerMusique("combat");
    }
    
    if(null === this.script) {
        console.error(script_id + " n'est pas une scène valide.");
        return;
    }
    
    this.heros = [];
    for(var ii = 0; ii < this.nbEssaisAlloues; ++ii) {
        this.heros.push(ii);
    }
    
    this.monstres = [];
    for(var ii = 0; ii < this.script.operations.length; ++ii) {
        this.monstres.push(ii);
    }
    
    arithmepique.shuffle(this.monstres);
    
    this.etat = new arithmepique.scene.etats.Depart(this);
};

arithmepique.scene.Scene.prototype = {
    nbEssaisAlloues: 5,
    dureeMillisecsChrono: 15 * 1000,
    classesMonstres: [
        "araignee", "abeille", "rat",
        "grenouille", "chauve-souris", "fantome",
        "mouche", "poisson", "escargot",
        "coccinelle", "serpent", "engrenage",
        "slimeBleu", "slimeRose", "slimeVert"],
    
    affichePersonnage: function(text) {
        //return "<span><span class='sprite'>" + text + "</span></span>";
        return "<span><span class='sprite'></span></span>";
    },
    
    affichePersonnages: function(noeud) {
        noeud.find(".heros").empty();
        
        var classes_heros = ["vert", "beige", "rose", "jaune", "bleu"];
        
        for(var ii = this.heros.length - 1; ii >= 0; --ii) {
            var html = this.affichePersonnage(this.heros[ii]);

            var classe_hero = classes_heros[ this.heros[ii] % classes_heros.length ];
            
            jQuery(html).addClass(classe_hero).appendTo(noeud.find(".heros"));
        }

        noeud.find(".monstres").empty();
        for(var ii = 0; ii < this.monstres.length; ++ii) {
            var html = this.affichePersonnage(this.monstres[ii]);
            
            var equation = this.script.operations[this.monstres[ii]];
            
            var classe_monstre = "";
            
            if(-1 !== equation.indexOf("+")) {
                classe_monstre = this.script.monstres["+"];
            } else if (-1 !== equation.indexOf("-")) {
                classe_monstre = this.script.monstres["-"];
            } else if (-1 !== equation.indexOf("*")) {
                
                var nb_sortes = this.script.monstres["*"].length;
                var sorte = this.monstres[ii] % nb_sortes;
                
                classe_monstre = this.script.monstres["*"][sorte];
            }
            
            jQuery(html).addClass(classe_monstre).appendTo(noeud.find(".monstres"));
        }
    }
};

//Main

jQuery(function() {
    var script_id = jQuery.QueryString["scene"];
    jQuery("body").attr("id", "s" + script_id);
    new arithmepique.scene.Scene(script_id);
    
    //Aide
    var details_aide = jQuery("#aide");
    jQuery("<button id='btn-aide'></button>")
        .appendTo("body")
        .on("click", function(e)  {
            e.preventDefault();

            var hauteur_vue = jQuery(window).height();

            $.Zebra_Dialog(details_aide.html(), {
                width: 800,
                max_height: hauteur_vue > 700 ? 550 : hauteur_vue - 150,
                buttons: ["Fermer"],
                type: "question"
            });
        });
});