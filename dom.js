// import voedselTemplate from './voedsel-template.html' with { type: 'html' }; 

// 1. zeer snelle, maar wel zeer omslachtige manier. - alle HTML-elementen handmatig opbouwen
// const addFood = () => {
//     console.time();
//     let newTr = document.createElement('tr');

//     let newTdId = document.createElement('td');
//     let idTextNode = document.createTextNode('16');
//     newTdId.appendChild(idTextNode);
//     newTr.appendChild(newTdId);

//     let newTdDescription = document.createElement('td');
//     let descriptionTextNode = document.createTextNode('Appeltaart');
//     newTdDescription.appendChild(descriptionTextNode);
//     newTr.appendChild(newTdDescription);

//     let newTdKcal = document.createElement('td');
//     let kcalTextNode = document.createTextNode('2800 kcal');
//     newTdKcal.appendChild(kcalTextNode);
//     newTr.appendChild(newTdKcal);

//     let newTdPhoto = document.createElement('td');
//     let img = document.createElement('img');
//     img.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fhksqkdlah%2Fimage%2Fupload%2Fc_fill%2Cdpr_2.0%2Cf_auto%2Cfl_lossy.progressive.strip_profile%2Cg_faces%3Aauto%2Ch_599%2Cq_auto%3Alow%2FSFS_Dutch-Appeltaart_611_nm7tbs&f=1&nofb=1&ipt=2fb24e5e1cc556c007a094fd17c17660c28989cd3f45842bc923beea5b78dd16');
//     newTdPhoto.appendChild(img);
//     newTr.appendChild(newTdPhoto);

//     document.querySelector('tbody').appendChild(newTr);
//     console.timeEnd();
// };

// 2. redelijk leesbaar, maar wel lelijk (duplicatie, geen code completion), tikje security issue, en nogal traag.
// const addFood = () => {
//   console.time();

//   document.querySelector("tbody").innerHTML += `<tr>
//         <td>16</td>
//         <td>Appeltaart <div onmouseover="alert('q');">hover hier</div></td>
//         <td>4500 kcal</td>
//         <td><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fhksqkdlah%2Fimage%2Fupload%2Fc_fill%2Cdpr_2.0%2Cf_auto%2Cfl_lossy.progressive.strip_profile%2Cg_faces%3Aauto%2Ch_599%2Cq_auto%3Alow%2FSFS_Dutch-Appeltaart_611_nm7tbs&f=1&nofb=1&ipt=2fb24e5e1cc556c007a094fd17c17660c28989cd3f45842bc923beea5b78dd16"></td>
//     </tr>`;

//   console.timeEnd();
// };

// 3. redelijk leesbaar, lekker snel, hoe het moet - <template>
const addFood = () => {
  console.time();

//   let template = document.querySelector("#template-voedsel").content;
  let clone = voedselTemplate.cloneNode(true);
  console.log(clone);

  clone.querySelector(".id").innerText = "16";
  clone.querySelector(".description").innerText = "Appeltaart";
  clone.querySelector(".kcal").innerText = "4500";
  clone.querySelector(".photo").src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fhksqkdlah%2Fimage%2Fupload%2Fc_fill%2Cdpr_2.0%2Cf_auto%2Cfl_lossy.progressive.strip_profile%2Cg_faces%3Aauto%2Ch_599%2Cq_auto%3Alow%2FSFS_Dutch-Appeltaart_611_nm7tbs&f=1&nofb=1&ipt=2fb24e5e1cc556c007a094fd17c17660c28989cd3f45842bc923beea5b78dd16';

  document.querySelector("tbody").appendChild(clone);

  console.timeEnd();
};

// DOM API: React Vue Angular Svelte