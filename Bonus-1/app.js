// Scopo del Bonus:
// Rendere l’esercizio responsive, mandando a capo le card.
// Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina.

let list_Teams_members = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "../assets/img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "../assets/img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "../assets/img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "../assets/img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "../assets/img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "../assets/img/female3.png"
    }
  ];

  //Generativa di Base

  function HandleCardGenFun(){
    let parent_node_card = document.getElementById("box-card-parent");
    parent_node_card.innerHTML = "";
    let parent_fragment = document.createDocumentFragment();
    for (let index = 0; index < list_Teams_members.length; index++) {
        const cards = document.createElement('div');
        cards.setAttribute("class", "cards");
        cards.append(HandleCardImgGen(list_Teams_members, index, "img-card"));
        cards.append( HandleCardTextGen(list_Teams_members, index, "text-cards"));
        parent_fragment.append(cards);
    }
    parent_node_card.appendChild(parent_fragment);
  }

  //Funzione Generativa delle Immagini

  function HandleCardImgGen(list, keys, clas) {
    let container_img = document.createElement('div');
    const img = document.createElement("img");
    img.setAttribute("src", list[keys].img);
    container_img.setAttribute("class", clas);
    container_img.append(img);
    return container_img;
  }

  //Funzione Generativa Dei Testi

  function HandleCardTextGen(list, keys, clas) {
        const container_text = document.createElement("div");
        container_text.setAttribute("class", clas);
        const text_h3 = document.createElement("h3");
        const text_p = document.createElement("p");
        let txt_links = document.createElement("a");
        txt_links.setAttribute("href", "#");
        let text_h3_node = document.createTextNode(list[keys].name);
        let text_p_node = document.createTextNode(list[keys].role);
        let text_links_node = document.createTextNode(list[keys].email);
        text_h3.append(text_h3_node);
        text_p.append(text_p_node);
        txt_links.append(text_links_node);
        container_text.append(text_h3);
        container_text.append(text_p);
        container_text.append(txt_links);
        return container_text;
  }

  const submit_event = document.getElementById("Btn-sub");
  submit_event.addEventListener("click", (e)=>{
    let value_name = document.getElementById("inputName");
    let value_email = document.getElementById("inputEmail");
    let value_role = document.getElementById("inputRole");
    let value_img = document.getElementById("inputImg");
    let object_new = {
      name: "",
      role: "",
      email: "",
      img: ""
    }

    if (value_email.value !== "" && value_img.value !== "" && value_email.value !== "" && value_role.value !== "") {
      object_new.name = value_name.value;
      object_new.role = value_role.value;
      object_new.email = value_email.value;
      object_new.img = value_img.value;

      list_Teams_members.push(object_new);
      HandleCardGenFun();
    } else {
      window.alert("Inserisci i valori corrispondenti nei campi di input.");
    }

    e.preventDefault();
    console.log(object_new)
  })

  //Loading dell'evento in finestra

window.addEventListener("load",()=>{
  window.alert("Benvenuto nella pagina, aggiungi al tuo team chi vuoi far parte per il tuo viaggio.");
  HandleCardGenFun();
});