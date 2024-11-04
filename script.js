const optionsContainer = document.querySelectorAll(".option-container");
const image = document.querySelector(".frame img");
console.log(image.src);
let title = document.querySelector(".active-title");
let description = document.querySelector(".active-description");

function noActiveTab() {
  optionsContainer.forEach((optionContainer) => {
    optionContainer.classList.remove("active");
  });
}
optionsContainer.forEach((optionContainer) => {
  optionContainer.addEventListener("click", () => {
    noActiveTab();
    optionContainer.classList.add("active");
    let option = optionContainer.innerText;
    if (option === "History") {
      image.src = "images/image1.jpeg";
      title.innerText = "History";
      description.innerText =
        "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.";
    } else if (option === "Vision") {
      image.src = "images/image2.jpeg";
      title.innerText = "Vision";
      description.innerText =
        "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.";
    } else {
      image.src = "images/image3.jpeg";
      title.innerText = "Goals";
      description.innerText =
        "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.";
    }
  });
});