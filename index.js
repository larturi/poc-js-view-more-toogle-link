const fullRichTextAEMMore250 = `
<ul class="seo-optimizer-container">
    <li>
        <div class="seooptimizer__text-info">
            <p>Si estás por mudarte y querés seguir manteniendo el mismo servicio de Internet, podés solicitar el <b>cambio de domicilio</b> de un modo muy sencillo. Este trámite te asegurará mantener el mismo plan y te ahorrará tener que hacer todo nuevamente.<br>
                <br>
                Para realizar el cambio de domicilio podés comunicarte telefónicamente o completar el formulario online para gestionar la mudanza. De esa manera, tenés la posibilidad de elegir la fecha de instalación, llevándote a tu nuevo hogar el deco y el módem que tenés desde que comenzaste a ser cliente de <b>Personal y Flow.</b><br>
                <br>
                La ventaja de llevar a cabo este trámite es que, al mudarte, tenés la posibilidad de mantener las promociones exclusivas en tu nuevo domicilio. Sumado a eso, la conexión de los servicios en tu nuevo hogar será totalmente sin cargo. Además, no es necesario que solicites la desconexión de los servicios en el domicilio que vas a dejar.<br>
                <br>
                Una vez que pidas el cambio de domicilio y la conexión del servicio en tu nueva casa, seguirás disfrutando de Personal y Flow.<br>
                <br>
                Ahora que ya sabés cómo hacer el cambio de domicilio por internet, es bueno que sepas que podés realizar el cambio de titularidad de tus servicios en caso de ser necesario. Es importante aclarar que el trámite es gratuito y no tendrás complicaciones al momento de llevarlo a cabo.<br>
                <br>
                Como el hecho de mudarte no debe ser un problema para seguir utilizando los servicios de internet y cable, te brindamos las soluciones más simples para que no dejes de disfrutarlos. &nbsp;
            </p>
        </div>
    </li>       
</ul>`;

const fullRichTextAEMLess250 = `
<ul class="seo-optimizer-container">
    <li>
        <div class="seooptimizer__text-info">
            <p>Si estás por mudarte y querés seguir manteniendo el mismo servicio de Internet, podés solicitar el <b>cambio de domicilio</b> de un modo muy sencillo.</p>
        </div>
    </li>       
</ul>`;

const fullRichTextAEM = fullRichTextAEMMore250;
// const fullRichTextAEM = fullRichTextAEMLess250;

document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.getElementById("container");

    // Crear una nueva constante fullPlainTextAEM con el texto plano
    const fullPlainTextAEM = fullRichTextAEM.replace(/<[^>]+>/g, '');

    // Mostrar por defecto los 250 primeros caracteres o el texto completo si es menor a 250 caracteres
    const initialText = fullPlainTextAEM.length <= 250 ? fullPlainTextAEM : fullPlainTextAEM.slice(0, 250) + '...';
    container.innerHTML = initialText;

    // Agregar el enlace "Ver Más" solo si el texto tiene más de 250 caracteres
    if (fullPlainTextAEM.length > 250) {
        const verMasLink = document.createElement("a");
        verMasLink.href = "#";
        verMasLink.textContent = "Ver Más";
        verMasLink.addEventListener("click", function () {
        container.innerHTML = fullRichTextAEM;
    
        const verMenosLink = document.createElement("a");
        verMenosLink.href = "#";
        verMenosLink.textContent = "Ver Menos";
        verMenosLink.addEventListener("click", function () {
            container.innerHTML = initialText;
            container.appendChild(verMasLink);
        });
    
        container.appendChild(verMenosLink);
        });
    
        container.appendChild(verMasLink);
    };
});