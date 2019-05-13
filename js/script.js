let sectionsAnim = {
    headerElts: document.getElementsByClassName('section-header'),
    iconElts: document.getElementsByClassName('section-icon'),
    mainElts: document.getElementsByClassName('section-main'),
    arrowElts: document.querySelectorAll('.section-header-arrow i'),
    titleContainerElts: document.getElementsByClassName('section-header-name-container'),

    accordionSectionAnim: function (index) {
        let accElt = this.mainElts[index],
            arrowElt = this.arrowElts[index],
            titleContainerElt = this.titleContainerElts[index],
            headerElt = this.headerElts[index];

        if (accElt.style.maxHeight) {
            accElt.style.maxHeight = null;
            arrowElt.classList.toggle('js', false);
            titleContainerElt.classList.toggle('name-container-js', true);
            headerElt.classList.toggle('active', false);
        } else {
            accElt.style.maxHeight = accElt.scrollHeight + "px";
            arrowElt.classList.toggle('js', true);
            titleContainerElt.classList.toggle('name-container-js', false);
            headerElt.classList.toggle('active', true);
        }

    },

    accordionSection: function () {
        let a = this.headerElts,
            b = this.iconElts,
            c = this;
        for (let i = 0; a[i]; i++) {
            a[i].addEventListener('click', function () {
                c.accordionSectionAnim(i);
            });
            b[i].addEventListener('click', function () {
                c.accordionSectionAnim(i);
            });
        }
    },

    init: function () {
        for (let i = 0; this.mainElts[i]; i++) {
            this.mainElts[i].classList.add('section-main-js');
            this.titleContainerElts[i].classList.add('name-container-js')
        }
        this.accordionSection();
    },


};

sectionsAnim.init();


/* ******************************************************************* */


let profile = {

    interrupters: [
        ".profile-header",
        ".profile-icon"
    ],

    cibles: [
        // !profile-main doit rester index[0]
        ".profile-main",
        ".profile-main-top",
        ".profile-main-image",
        ".profile-main-name",
        ".profile-main-data",
        ".profile-table",
        ".profile-main-description",
        ".profile-header-name-container",
        "#profile-arrow"
    ],

    getElts: function (elts) {
        let i, listeElts = [];
        for (i = 0; elts[i]; i++) {
            listeElts.push(document.querySelector(elts[i]));
        }
        return listeElts;
    },

    nomElts: function (elts) {
        let i, nomElts = [];
        for (i = 0; elts[i]; i++) {
            nomElts.push(elts[i].substr(1));
        }
        return nomElts;
    },

    animation: function (state) {
        let CibleElts = this.getElts(this.cibles),
            nomElts = this.nomElts(this.cibles),
            headerElt = this.getElts(this.interrupters)[0];

        if (state) {
            let i;
            for (i = 1; CibleElts[i]; i++) {
                CibleElts[i].classList.toggle(nomElts[i] + "-js", true);
            }
            headerElt.classList.toggle('active', false);
        } else {
            for (i = 1; CibleElts[i]; i++) {
                CibleElts[i].classList.toggle(nomElts[i] + "-js", false);
            }
            headerElt.classList.toggle('active', true);
        }
    },

    eventListener: function () {
        let interrupterElts = this.getElts(this.interrupters),
            a = this.getElts(this.cibles)[0],
            i;

        for (i = 0; interrupterElts[i]; i++) {
            interrupterElts[i].addEventListener('click', function () {
                if (parseInt(getComputedStyle(a).maxHeight) > 80) {
                    a.style.maxHeight = null;
                    profile.animation(true);

                } else {
                    a.style.maxHeight = a.scrollHeight + "px";
                    profile.animation(false);
                }
            });
        }

    },

    init: function () {
        let a = this.getElts(this.cibles)[0];
        b = this.nomElts(this.cibles)[0];

        a.classList.add(b + "-js");
        this.animation(true);
        this.eventListener();
    }

};

profile.init();


/* ********************************************************************************* */

//  animation barres bloc compétences

let skillsAnim = {
    barElts: document.querySelectorAll('div[class*=skills-bar-]'),
    sectionElt: document.querySelector('.skills .section-main-js'),
    eventElts: [
        document.querySelector('.skills .section-header'),
        document.querySelector('.skills .section-icon')
    ],


    close: function () {
        let elts = this.barElts;

        for (let i = 0; elts[i]; i++) {
            if ((parseInt(getComputedStyle(elts[i]).width)) > 0) {
                elts[i].style.width = 0;
            }
        }
    },


    open: function () {
        let elts = this.barElts;

        for (let i = 0; elts[i]; i++) {
            elts[i].style.width = null;
        }
    },

    anim: function () {
            if (!isNaN(this.sectionElt.style.maxHeight)) {
                this.close();
            } else {
                this.open();
            }
    },

    init: function() {
        this.close();
        let obj = this;
        for (let i = 0; this.eventElts[i]; i++) {
            this.eventElts[i].addEventListener('click', function() {
                obj.anim();
            });
        }
    }



}

skillsAnim.init();

/* ************************************************************************************ */

