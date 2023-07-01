const MAX_LENGTH_CHARACTERS = 250;

const fullRichTextAEM = fullRichTextLong3;

document.addEventListener('DOMContentLoaded', function () {
   const container = document.getElementById('container');

   // Crear una nueva constante fullPlainTextAEM con el texto plano
   const fullPlainTextAEM = fullRichTextAEM.replace(/<[^>]+>/g, '');

   // Calcular la cantidad de caracteres perdidos por etiquetas HTML en los primeros 250 caracteres
   const charactersLost = Math.abs(fullRichTextAEM.slice(0, MAX_LENGTH_CHARACTERS).replace(/<[^>]+>/g, '').length - MAX_LENGTH_CHARACTERS);

   console.log(MAX_LENGTH_CHARACTERS + charactersLost)
   // Mostrar por defecto los 250 primeros caracteres o el texto completo si es menor a MAX_LENGTH_CHARACTERS caracteres
   const initialText =
      fullPlainTextAEM.length <= MAX_LENGTH_CHARACTERS
         ? fullRichTextAEM
         : fullRichTextAEM.slice(0, MAX_LENGTH_CHARACTERS + charactersLost) + '... ';
   container.innerHTML = initialText;

   // Agregar el enlace "Ver Más" solo si el texto tiene más de MAX_LENGTH_CHARACTERS caracteres
   if (fullPlainTextAEM.length > MAX_LENGTH_CHARACTERS) {
      const verMasLink = document.createElement('a');
      verMasLink.href = '#';
      verMasLink.textContent = 'Mostrar más';

      verMasLink.addEventListener('click', function () {
         container.innerHTML = fullRichTextAEM;

         const verMenosLink = document.createElement('a');
         verMenosLink.href = '#';
         verMenosLink.textContent = 'Mostrar menos';
         verMenosLink.addEventListener('click', function () {
            container.innerHTML = initialText;
            const firstParagraph = container.querySelector('p:last-child');
            if (firstParagraph) {
                firstParagraph.appendChild(verMasLink);
            }
         });

         container.appendChild(verMenosLink);
      });

      const firstParagraph = container.querySelector('p:last-child');
      if (firstParagraph) {
        firstParagraph.appendChild(verMasLink);
      }
   }
});
