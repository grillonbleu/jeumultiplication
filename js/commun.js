//jQuery.QueryString : accéder aux arguments GET de la page
(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));
})(jQuery);

window.arithmepique = {};
window.arithmepique.animEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";



/**
 * Evaluateur simple d'addition et de soustractions exprimées dans une chaine.
 * 
 * @param {string} chaine_operation "1 + 2", "3 - 1", etc.
 * 
 * @returns {Number|null} Résultat de l'opération ou null, sur échec d'évaluation.
 */
(function() {
    var regexp = /^[0-9]+\s[\+-]\s[0-9]+$/;
    
    window.arithmepique.calc = function(chaine_operation) {
        if(chaine_operation.match(regexp)) {
            return eval(chaine_operation);
        }
        
        return null;
    } 
    
})();



/**
 * Mélange les éléments d'un vecteur in situ.
 * 
 * Algo : Fisher–Yates shuffle
 * Source : http://stackoverflow.com/a/6274398
 * 
 * @param {type} array Le vecteur à mélanger
 * 
 * @returns {type} array Le vecteur mélangé
 */
arithmepique.shuffle = function(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


arithmepique.Scenes = function() {};
arithmepique.Scenes.prototype = {
    obtientSceneParId: function(scene_id) {
        var match = jQuery.grep(arithmepique.scripts.scenes, function(item) {
            return scene_id === item.id;
        });
        
        if(match.length === 0) return null;
        
        return match[0];
    }
};

arithmepique.Audio = function() {};
arithmepique.Audio.prototype = {
    lecteurs: {},
    
    jouerMusique: function(nom) {
        switch(nom) {
            case "presentation":
                this.lecteurs[nom] = new Audio("audio/257997__foolboymedia__shanty-town.mp3"); 
                break;
                
            case "carte":
                this.lecteurs[nom] = new Audio("audio/203099__lemoncreme__groove-music.mp3");
                break;
                
            case "combat":
                this.lecteurs[nom] = new Audio("audio/218385__zagi2__robot-boogie-woogie.mp3");
                break;
                
            case "boss":
                this.lecteurs[nom] = new Audio("audio/251461__joshuaempyre__arcade-music-loop.mp3");
                break;
        }
        
        this.lecteurs[nom].addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        this.lecteurs[nom].play();
    },
    
    jouerSon: function(nom) {
        switch(nom) {
            case "attaque":
                this.lecteurs[nom] = new Audio("audio/253177__suntemple__retro-accomplished-sfx.mp3");
                break;
            
            case "battu":
                this.lecteurs[nom] = new Audio("audio/253174__suntemple__retro-you-lose-sfx.mp3");
                break;
            
            case "victoire":
                this.lecteurs[nom] = new Audio("audio/22267__zeuss__the-chime.mp3");
                break;
               
        }
        
        this.lecteurs[nom].play();
    }
};

arithmepique.Joueurs = function() {};
arithmepique.Joueurs.prototype = {
    cleArchiveJoueurs: "ArithmepicJoueurs",
    
    obtientJoueurs: function() {
        var joueurs = localStorage.getItem(this.cleArchiveJoueurs);
        
        if(joueurs) {
            joueurs = JSON.parse(joueurs);
        } else {
            joueurs = {};
        }
        
        return joueurs;
    },
    
    obtientNomJoueurs: function() {
        var joueurs = this.obtientJoueurs();
        
        return Object.keys(joueurs);
    },
    
    creeJoueur: function(nouveau_joueur) {
        var joueurs = this.obtientJoueurs();
        
        if(!joueurs.hasOwnProperty(nouveau_joueur)) {
            joueurs[nouveau_joueur] = {
                indexSceneMax: 0,
                etoiles: {}
            };    
            localStorage.setItem("ArithmepicJoueurs", JSON.stringify(joueurs));
            return true;
        }       
        
        return false;
    },
    
    effacePartie: function(nom_joueur) {
        var joueurs = this.obtientJoueurs();
        
        delete joueurs[nom_joueur];
        
        localStorage.setItem("ArithmepicJoueurs", JSON.stringify(joueurs));
    },
    
    debuteSessionJoueur: function(nom_joueur) {
        var joueurs = this.obtientJoueurs();
        
        if(joueurs.hasOwnProperty(nom_joueur)) {
            sessionStorage.setItem("ArithmepicNomJoueur", nom_joueur);
            return true;
        }       
        
        return false;
    },
    
    obtientNomJoueurSession: function() {
        return sessionStorage.getItem("ArithmepicNomJoueur");
    },
    
    ajouteEtoilesJoueur: function(nom_joueur, nom_scene, nb_etoiles) {
        var joueurs = this.obtientJoueurs();
        
        var joueur = joueurs[nom_joueur];
        
        if(!(nom_scene in joueur.etoiles) ||
           joueur.etoiles[nom_scene] < nb_etoiles) {
            joueur.etoiles[nom_scene] = nb_etoiles;

            joueur.indexSceneMax = this.calculerSceneMax(joueur.etoiles);
            
            localStorage.setItem("ArithmepicJoueurs", JSON.stringify(joueurs));
        }
    },
    
    calculerSceneMax: function(etoiles, etoiles_total) {
        var scenes = arithmepique.scripts.scenes;
        var portes = arithmepique.scripts.portes;
        
        for(var ii = 0; ii < scenes.length; ++ii) {
            var scene = scenes[ii];
            
            var porte = portes[scene.id];
            if(porte && porte.nbEtoiles > etoiles_total) {
                return ii - 1;
            }
            
            var nb_etoiles = etoiles[scene.id];
            if(!nb_etoiles) {
                return ii;
            }
        }
        
        return scenes.length - 1;
    },
    
    //TODO retirer
    obtientEtoilesJoueur: function(nom_joueur) {
        var joueurs = this.obtientJoueurs();
        
        var joueur = joueurs[nom_joueur];
        
        return joueur.etoiles;
    },
    
    obtientJoueur: function(nom_joueur) {
        var joueurs = this.obtientJoueurs();
        
        var joueur = joueurs[nom_joueur];
        
        return joueur;
    },
    
    obtientTotalEtoilesJoueur: function(nom_joueur) {
        var etoiles_recues = this.obtientEtoilesJoueur(nom_joueur);
        
        var total_nb_etoiles = 0;
        for(var scene_id in etoiles_recues) {
            if(!etoiles_recues.hasOwnProperty(scene_id)) continue;
            total_nb_etoiles += etoiles_recues[scene_id];
        }

        return total_nb_etoiles;
    }
    
};
