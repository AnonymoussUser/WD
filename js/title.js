document.addEventListener("DOMContentLoaded", function() {
    // Dopo 4 secondi, anima il testo e il sottotitolo per renderli visibili
    setTimeout(function() {
        var hiddenText = document.getElementById("hidden-text");
        var hiddenSubtitle = document.getElementById("hidden-subtitle");
        hiddenText.style.display = "block"; // Rendi visibile il testo
        hiddenSubtitle.style.display = "block"; // Rendi visibile il sottotitolo

        // Ottieni il testo originale e il sottotitolo originale
        var originalText = hiddenText.textContent;
        var originalSubtitle = hiddenSubtitle.textContent;
        hiddenText.textContent = ''; // Svuota il testo originale
        hiddenSubtitle.textContent = ''; // Svuota il sottotitolo originale

        // Creazione dell'animazione per scrivere il testo un carattere alla volta
        var writingAnimation = anime.timeline({
            targets: hiddenText,
            easing: 'linear', // Usiamo un easing lineare per un movimento uniforme
        });

        // Aggiungi un passo per ogni carattere del testo originale
        for (var i = 0; i < originalText.length; i++) {
            writingAnimation.add({
                duration: 2000, // Durata per ogni carattere (2 secondi)
                update: function(anim) {
                    hiddenText.textContent = originalText.substring(0, Math.ceil(anim.progress * originalText.length));
                },
            });
        }

        // Creazione dell'animazione per scrivere il sottotitolo un carattere alla volta
        var subtitleWritingAnimation = anime.timeline({
            targets: hiddenSubtitle,
            easing: 'linear', // Usiamo un easing lineare per un movimento uniforme
        });

        // Aggiungi un passo per ogni carattere del sottotitolo originale
        for (var j = 0; j < originalSubtitle.length; j++) {
            subtitleWritingAnimation.add({
                duration: 2000, // Durata per ogni carattere (2 secondi)
                update: function(anim) {
                    hiddenSubtitle.textContent = originalSubtitle.substring(0, Math.ceil(anim.progress * originalSubtitle.length));
                },
            });
        }

    }, 4000); // 4000 millisecondi = 4 secondi
});
