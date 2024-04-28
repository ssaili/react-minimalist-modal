# 📂 react-minimalist-modal
react-minimalist-modal est un composant React simple et minimaliste pour créer des fenêtres modales. Il offre une interface propre et personnalisable avec de nombreuses options de style.

## 🔗 Lien
Vous pouvez trouver le package npm ici : [react-minimalist-modal](https://www.npmjs.com/package/react-minimalist-modal)

## 📥 Installation
Vous pouvez installer le package `react-minimalist-modal` via npm :

```bash
npm install react-minimalist-modal
```

## 🚀 Utilisation
```js
import React, { useState } from "react";
import Modal from "react-minimalist-modal";
import "{your-path}/node_modules/react-minimalist-modal/dist/style.css";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        modalWidth={"300px"}
        modalBackgroundColor={"white"}
        modalBorderColor={"black"}
        modalTitle={"Modal Title"}
        modalTitleColor={"black"}
        modalTitleFont={"Times New Roman"}
        modalTitleFontSize={"30px"}
        modalTitleFontWeight={"normal"}
        closeButtonColor={"black"}
        closeButtonSize={"30px"}
        lineColor={"grey"}
      >
        <div>Modal content</div>
      </Modal>
    </div>
  );
};

export default MyComponent;
```

## ⚙️ Props
| Prop                 | Type     | Requis | Description                                      |
| -------------------- | -------- | ------ | -------------------------------------------------|
| isOpen               | boolean  | Oui    | Contrôle si la modale est ouverte ou fermée.     |
| onClose              | fonction | Oui    | Fonction de rappel pour fermer la modale.        |
| modalTitle           | string   | Oui    | Titre de la modale.                              |
| modalWidth           | string   | Non    | Largeur de la modale.                            |
| modalBackgroundColor | string   | Non    | Couleur d'arrière-plan de la modale.             |
| modalBorderColor     | string   | Non    | Couleur de la bordure de la modale.              |
| modalTitleColor      | string   | Non    | Couleur du titre de la modale.                   |
| modalTitleFontSize   | string   | Non    | Taille de police du titre de la modale.          |
| modalTitleFontWeight | string   | Non    | Graisse de police du titre de la modale.         |
| modalTitleFont       | string   | Non    | Famille de police du titre de la modale.         |
| closeButtonColor     | string   | Non    | Couleur du bouton de fermeture.                  |
| closeButtonSize      | string   | Non    | Taille de police du bouton de fermeture.         |
| lineColor            | string   | Non    | Couleur de la ligne dans l'en-tête de la modale. |

## 📜 Licence
Ce projet est sous licence MIT.
