function envoyer(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupère l'élément formulaire avec l'identifiant 'contact-form'
    const form = document.getElementById('contact-form');

    // Encode l'objet du message du formulaire pour l'inclure dans une URL
    const subject = encodeURIComponent('Prise de contact');
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n` +
        `Prénom: ${form.prenom.value}\n` +
        `Email: ${form.email.value}\n` +
        `Date de naissance: ${form.date.value}\n` +
        `Formation souhaitée: ${form.formations.value}\n` +
        `Actuellement, vous êtes: ${form.annee.value}\n` +
        `Langues parlées: ${Array.from(form.querySelectorAll('input[name="langues"]:checked'))
            .map(langue => langue.value)
            .join(', ')}\n\n` +
        `Demande spécifique: \n${form.demande.value}`
    );

    // Crée l'URL mailto avec les paramètres encodés
    window.location.href = `mailto:maxence.padrutt@gmail.com?subject=${subject}&body=${body}`;
}
