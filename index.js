function togglePopup1(){
    document.getElementById("popup1").classList.toggle("active");
    }
    function togglePopup2(){
    document.getElementById("popup2").classList.toggle("active");
    }
    function togglePopup3(){
    document.getElementById("popup3").classList.toggle("active");
    }
    function togglePopup4(){
    document.getElementById("popup4").classList.toggle("active");
    }

const languages = [
  { code: 'ro', label: 'Română 🇷🇴' },
  { code: 'it', label: 'Italiano 🇮🇹' },
  { code: 'en', label: 'English 🇬🇧' }
];

const langContainer = document.querySelector('.buttons');

langContainer.innerHTML = languages.map(lang =>
  `<button class="buton lang-btn" data-lang="${lang.code}">${lang.label}</button>`
).join('');

//for romania
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;

      if (lang === 'ro') {
        // 1. Remove all buttons
        document.querySelectorAll('.buton').forEach(el => el.remove());

        // 2. Insert <h1> into header
        const header = document.querySelector('header');
        const title = document.createElement('h1');
        title.className = 'page-title';
        title.textContent = 'Meniu';
        header.appendChild(title);

        //3. menu
        const buttonsContainer = document.querySelector(".buttons");
        const popupsHTML = `<div class="buttons">

    <button onclick="togglePopup1()" class="buton">Carne</button>
    <button onclick="togglePopup2()" class="buton">Ovo-Lacto cu Pește</button>
    <button onclick="togglePopup3()" class="buton">Ovo-Lacto-Vegetarian</button>
    <button onclick="togglePopup4()" class="buton">Jocuri</button>
</div>


<div class="popup" id="popup1">
    <div class="overlay"></div>
    <div class="content">
        <div class="close-btn" onclick="togglePopup1()">&times;</div>
        <h1>Meniu Carne</h1>
        <h3>Antreu rece:</h3>
        <p>• Riletă din pulpă de pui, piept de pui și dovleac, coaptă cu pesto de roșii<br>
            • Prăjitură de brânzeturi asortate cu nucă și merișoare<br>
            • Specialitate pané cu spumă de hrean<br>
            • Vol au vent cu salată din piept de pui<br>
            • Ruladă de curcan cu fistic în mantie cu piure de morcov<br>
            • Mousse de brânză cu avocado și somon fumé<br>
            • Mousse de brânzeturi fine, în mantie fresh<br>
            • Mușchi de vită cu tartar de avocado și mango<br>
            • Roșii cherry<br>
            • Castravete<br>
            • Măsline</p>
        <h3>Antreu cald:</h3>
        <p>• Balotină de curcan cu muşchi de vită în crumble de verdeţuri<br>
            • Piure de rădăcinoase<br>
            • Legume crocante<br>
            • Sos de brânzeturi</p>
        <h3>Fel principal:</h3>
        <p>• Rasol de viţel<br>
            • Cartofi aurii<br>
            • Legume aromatizate<br>
            • Sos Rouge Royal</p>
        <h3>Tort:</h3>
        <p>• Mousse fin de cocos cu inserție de piersică, învelit în mantie de ciocolată albă și perle delicate</p>
    </div>
    </div>

    <div class="popup" id="popup2">
        <div class="overlay"></div>
        <div class="content">
            <div class="close-btn" onclick="togglePopup2()">&times;</div>
            <h1>Meniu </h1>
            <h3>Antreu rece:</h3>
            <p>• Mousse de avocado și somon fumé<br>
                • Prăjitură de brânzeturi cu merișoare și nuci<br>
                • Tartină cu humus<br>
                • Prăjitură de brânzeturi în straturi și jeleu de sweet chilly<br>
                • Bruschete cu roșii<br>
                • Ruladă cu spanac și cașcaval<br>
                • Terină brânzeturi fine în mantie fresh<br>
                • Crochete vegetale<br>
                • Coșuleț cu salată de vinete<br>
                • Roșii cherry<br>
                • Castravete<br>
                • Măsline</p>
            <h3>Antreu cald:</h3>
            <p>• Ruladă vegetală cu brânză feta<br>
                • Cartofi copți<br>
                • Salată de ardei copți</p>
            <h3>Fel principal:</h3>
            <p>• Somon în fulgi de migdale<br>
                • Legume la wok în stil asiatic<br>
                • Sos citrus fresh</p>
            <h3>Tort:</h3>
            <p>• Mousse fin de cocos cu inserție de piersică, învelit în mantie de ciocolată albă și perle delicate</p>
        </div>
        </div>

        <div class="popup" id="popup3">
            <div class="overlay"></div>
            <div class="content">
                <div class="close-btn" onclick="togglePopup3()">&times;</div>
                <h1>Meniu </h1>
                <h3>Antreu rece:</h3>
                <p>• Prăjitură de brânzeturi în straturi cu jeleu sweet chilly<br>
                    • Ruladă spanac și cașcaval<br>
                    • Crochete vegetale<br>
                    • Coșuleț cu salată de vinete<br>
                    • Bruschete cu roșii<br>
                    • Prăjitură de brânzeturi cu merișoare și nuci<br>
                    • Tartină cu humus<br>
                    • Terină brânzeturi fine în mantie fresh<br>
                    • Bon bon de mazăre<br>
                    • Roșii cherry<br>
                    • Castravete<br>
                    • Măsline</p>
                <h3>Antreu cald:</h3>
                <p>• Ruladă vegetală cu brânză feta<br>
                    • Cartofi copți<br>
                    • Salată de ardei copți</p>
                <h3>Fel principal:</h3>
                <p>• Sărmăluțe vegetale<br>
                    • Mămăliguță și smântână</p>
                <h3>Tort:</h3>
                <p>• Mousse fin de cocos cu inserție de piersică, învelit în mantie de ciocolată albă și perle delicate</p>
            </div>
            </div>

            <div class="popup" id="popup4">
                <div class="overlay"></div>
                <div class="content">
                    <div class="close-btn" onclick="togglePopup4()">&times;</div>
                    <h1>Jocuri </h1>
                    <h3>Quizz - 25 de intrebari</h3>
                    <h4>Trei premii</h4>
                    <h3>CEL MAI RAPID SELFIE</h3>
                    <h4>Un premiu</h4>
                    <h3>PANTOFII IN MIJLOC</h3>
                    <h4>Doua premii</h4>
                    <h3>GASESTE INVITATII</h3>
                    <h4>Doua premii</h4>
                    <h3>CURSA LEGATĂ</h3>
                    <h4>Doua premii</h4>
                    <h3>CINE ARE OBIECTUL?</h3>
                    <h4>Doua premii</h4>
                    <h3>SCAUNELE MUZICALE</h3>
                    <h4>Doua premii</h4>
                </div>
                </div>`; // Your entire popup HTML here
        buttonsContainer.insertAdjacentHTML("afterend", popupsHTML);

      }

      // Inserted inside your existing lang button click logic:
if (lang === 'it') {
  // 1. Remove all buttons
  document.querySelectorAll('.buton').forEach(el => el.remove());

  // 2. Insert <h1> into header
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Menu';
  header.appendChild(title);

  // 3. Insert Italian Popups
  const buttonsContainer = document.querySelector(".buttons");
  const popupsHTML = `<div class="buttons">
  <button onclick="togglePopup1()" class="buton">Carne</button>
<button onclick="togglePopup2()" class="buton">Ovo-Latto con Pesce</button>
<button onclick="togglePopup3()" class="buton">Ovo-Latto-Vegetariano</button>
<button onclick="togglePopup4()" class="buton">Giochi</button>

</div>

    <div class="popup" id="popup1">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup1()">&times;</div>
        <h1>Menu Carne</h1>
        <h3>Antipasto freddo:</h3>
        <p>
          • Rillette di coscia e petto di pollo con zucca, cotta con pesto di pomodori<br>
          • Torta di formaggi assortiti con noci e mirtilli<br>
          • Specialità pané con mousse di rafano<br>
          • Vol-au-vent con insalata di petto di pollo<br>
          • Rotolo di tacchino con pistacchi in purea di carote<br>
          • Mousse di formaggio con avocado e salmone affumicato<br>
          • Mousse di formaggi raffinati in mantello fresco<br>
          • Filetto di manzo con tartare di avocado e mango<br>
          • Pomodorini<br>
          • Cetriolo<br>
          • Olive
        </p>
        <h3>Antipasto caldo:</h3>
        <p>
          • Rotolo di tacchino con filetto di manzo in crumble di erbe<br>
          • Purea di radici<br>
          • Verdure croccanti<br>
          • Salsa ai formaggi
        </p>
        <h3>Piatto principale:</h3>
        <p>
          • Bollito di vitello<br>
          • Patate dorate<br>
          • Verdure aromatiche<br>
          • Salsa Rouge Royal
        </p>
        <h3>Torta:</h3>
        <p>
          • Mousse fine di cocco con inserto di pesca, avvolto in un manto di cioccolato bianco e perle delicate
        </p>
      </div>
    </div>

    <div class="popup" id="popup2">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup2()">&times;</div>
        <h1>Menu</h1>
        <h3>Antipasto freddo:</h3>
        <p>
          • Mousse di avocado e salmone affumicato<br>
          • Torta di formaggi con mirtilli e noci<br>
          • Crostino con hummus<br>
          • Torta di formaggi a strati con gelée di peperoncino dolce<br>
          • Bruschette con pomodori<br>
          • Rotolo con spinaci e formaggio<br>
          • Terrina di formaggi raffinati in mantello fresco<br>
          • Crocchette vegetali<br>
          • Cestino con insalata di melanzane<br>
          • Pomodorini<br>
          • Cetriolo<br>
          • Olive
        </p>
        <h3>Antipasto caldo:</h3>
        <p>
          • Rotolo vegetale con formaggio feta<br>
          • Patate al forno<br>
          • Insalata di peperoni arrostiti
        </p>
        <h3>Piatto principale:</h3>
        <p>
          • Salmone in crosta di mandorle<br>
          • Verdure wok in stile asiatico<br>
          • Salsa agrumata fresca
        </p>
        <h3>Torta:</h3>
        <p>
          • Mousse fine di cocco con inserto di pesca, avvolto in un manto di cioccolato bianco e perle delicate
        </p>
      </div>
    </div>

    <div class="popup" id="popup3">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup3()">&times;</div>
        <h1>Menu</h1>
        <h3>Antipasto freddo:</h3>
        <p>
          • Torta di formaggi a strati con gelée di peperoncino dolce<br>
          • Rotolo di spinaci e formaggio<br>
          • Crocchette vegetali<br>
          • Cestino con insalata di melanzane<br>
          • Bruschette con pomodori<br>
          • Torta di formaggi con mirtilli e noci<br>
          • Crostino con hummus<br>
          • Terrina di formaggi raffinati in mantello fresco<br>
          • Bon bon di piselli<br>
          • Pomodorini<br>
          • Cetriolo<br>
          • Olive
        </p>
        <h3>Antipasto caldo:</h3>
        <p>
          • Rotolo vegetale con formaggio feta<br>
          • Patate al forno<br>
          • Insalata di peperoni arrostiti
        </p>
        <h3>Piatto principale:</h3>
        <p>
          • Involtini vegetali<br>
          • Polenta e panna acida
        </p>
        <h3>Torta:</h3>
        <p>
          • Mousse fine di cocco con inserto di pesca, avvolto in un manto di cioccolato bianco e perle delicate
        </p>
      </div>
    </div>

    <div class="popup" id="popup4">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup4()">&times;</div>
        <h1>Giochi</h1>
        <h3>Quizz - 25 domande</h3>
        <h4>Tre premi</h4>
        <h3>IL SELFIE PIÙ VELOCE</h3>
        <h4>Un premio</h4>
        <h3>LE SCARPE AL CENTRO</h3>
        <h4>Due premi</h4>
        <h3>TROVA GLI INVITATI</h3>
        <h4>Due premi</h4>
        <h3>CORSA A COPPIE</h3>
        <h4>Due premi</h4>
        <h3>CHI HA L’OGGETTO?</h3>
        <h4>Due premi</h4>
        <h3>SEDIE MUSICALI</h3>
        <h4>Due premi</h4>
      </div>
    </div>
  `;
  buttonsContainer.insertAdjacentHTML("afterend", popupsHTML);
}


// Assuming the previous structure is in place

// Add this inside the event listener for English language

if (lang === 'en') {
  // 1. Remove all buttons
  document.querySelectorAll('.buton').forEach(el => el.remove());

  // 2. Insert <h1> into header
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Menu';
  header.appendChild(title);

  // 3. Insert translated content in English
  const buttonsContainer = document.querySelector(".buttons");
  const popupsHTML = `<div class="buttons">
 <button onclick="togglePopup1()" class="buton">Meat</button>
<button onclick="togglePopup2()" class="buton">Ovo-Lacto with Fish</button>
<button onclick="togglePopup3()" class="buton">Ovo-Lacto Vegetarian</button>
<button onclick="togglePopup4()" class="buton">Games</button>


</div>

    <!-- Popup 1 -->
    <div class="popup" id="popup1">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup1()">&times;</div>
        <h1>Meat Menu</h1>
        <h3>Cold Appetizer:</h3>
        <p>
          • Chicken and pumpkin rillettes baked with tomato pesto<br>
          • Cheese cake with nuts and cranberries<br>
          • Breaded specialty with horseradish mousse<br>
          • Vol-au-vent with chicken salad<br>
          • Turkey roulade with pistachio and carrot puree<br>
          • Cheese mousse with avocado and smoked salmon<br>
          • Fine cheese mousse with fresh crust<br>
          • Beef tenderloin with avocado and mango tartar<br>
          • Cherry tomatoes<br>
          • Cucumber<br>
          • Olives
        </p>
        <h3>Hot Appetizer:</h3>
        <p>
          • Turkey and beef ballotin in herb crumble<br>
          • Root vegetable puree<br>
          • Crunchy vegetables<br>
          • Cheese sauce
        </p>
        <h3>Main Course:</h3>
        <p>
          • Veal stew<br>
          • Golden potatoes<br>
          • Aromatic vegetables<br>
          • Rouge Royal sauce
        </p>
        <h3>Cake:</h3>
        <p>
          • Fine coconut mousse with peach insert, wrapped in white chocolate and delicate pearls
        </p>
      </div>
    </div>

    <!-- Popup 2 -->
    <div class="popup" id="popup2">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup2()">&times;</div>
        <h1>Menu</h1>
        <h3>Cold Appetizer:</h3>
        <p>
          • Avocado mousse with smoked salmon<br>
          • Cheese cake with cranberries and nuts<br>
          • Hummus tartine<br>
          • Layered cheese cake with sweet chili jelly<br>
          • Tomato bruschetta<br>
          • Spinach and cheese roulade<br>
          • Fresh-crusted fine cheese terrine<br>
          • Vegetable croquettes<br>
          • Eggplant salad basket<br>
          • Cherry tomatoes<br>
          • Cucumber<br>
          • Olives
        </p>
        <h3>Hot Appetizer:</h3>
        <p>
          • Vegetable roulade with feta<br>
          • Baked potatoes<br>
          • Roasted pepper salad
        </p>
        <h3>Main Course:</h3>
        <p>
          • Almond crusted salmon<br>
          • Wok vegetables in Asian style<br>
          • Citrus fresh sauce
        </p>
        <h3>Cake:</h3>
        <p>
          • Fine coconut mousse with peach insert, wrapped in white chocolate and delicate pearls
        </p>
      </div>
    </div>

    <!-- Popup 3 -->
    <div class="popup" id="popup3">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup3()">&times;</div>
        <h1>Menu</h1>
        <h3>Cold Appetizer:</h3>
        <p>
          • Layered cheese cake with sweet chili jelly<br>
          • Spinach and cheese roulade<br>
          • Vegetable croquettes<br>
          • Eggplant salad basket<br>
          • Tomato bruschetta<br>
          • Cheese cake with cranberries and nuts<br>
          • Hummus tartine<br>
          • Fresh-crusted fine cheese terrine<br>
          • Pea bonbon<br>
          • Cherry tomatoes<br>
          • Cucumber<br>
          • Olives
        </p>
        <h3>Hot Appetizer:</h3>
        <p>
          • Vegetable roulade with feta<br>
          • Baked potatoes<br>
          • Roasted pepper salad
        </p>
        <h3>Main Course:</h3>
        <p>
          • Vegetarian cabbage rolls<br>
          • Polenta and sour cream
        </p>
        <h3>Cake:</h3>
        <p>
          • Fine coconut mousse with peach insert, wrapped in white chocolate and delicate pearls
        </p>
      </div>
    </div>

    <!-- Popup 4 -->
    <div class="popup" id="popup4">
      <div class="overlay"></div>
      <div class="content">
        <div class="close-btn" onclick="togglePopup4()">&times;</div>
        <h1>Games</h1>
        <h3>Quizz - 25 questions</h3>
        <h4>Three prizes</h4>
        <h3>FASTEST SELFIE</h3>
        <h4>One prize</h4>
        <h3>SHOES IN THE MIDDLE</h3>
        <h4>Two prizes</h4>
        <h3>FIND THE GUESTS</h3>
        <h4>Two prizes</h4>
        <h3>TIED RACE</h3>
        <h4>Two prizes</h4>
        <h3>WHO HAS THE ITEM?</h3>
        <h4>Two prizes</h4>
        <h3>MUSICAL CHAIRS</h3>
        <h4>Two prizes</h4>
      </div>
    </div>
  `;

  buttonsContainer.insertAdjacentHTML("afterend", popupsHTML);
}

    });
  });
});


