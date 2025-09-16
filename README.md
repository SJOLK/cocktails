# 🍸 Cocktails Manager

Application Angular permettant la **gestion de recettes de cocktails**.  
Ce projet a été réalisé dans le cadre d’un travail universitaire.

---

## 🚀 Fonctionnalités

### Vue **Cocktails**
- Affichage de la liste des cocktails (mock depuis `data.ts`).
- Recherche par nom.
- Sélection d’un cocktail → affichage des détails (image, description, ingrédients).
- Mise en favoris (ajout/retrait) → stocké dans le `localStorage`.
- Ajout des ingrédients du cocktail au **panier**.

### Vue **Panier**
- Affiche tous les ingrédients nécessaires aux cocktails choisis.
- Pas de doublons → compteur par ingrédient.
- Boutons `+` / `-` pour ajuster les quantités.
- Suppression d’un ingrédient individuel.
- Bouton **vider le panier**.

### Vue **Admin**
- Accessible uniquement aux utilisateurs avec le rôle `admin`.
- Gestion des cocktails :
  - Liste avec boutons **Modifier / Supprimer**.
  - Ajout d’un nouveau cocktail (au moins un ingrédient requis).
- Gestion des utilisateurs (CRUD) :
  - Ajout / suppression d’utilisateurs.
  - Attribution du rôle `admin` ou `user`.
  - Chaque utilisateur possède sa propre liste de favoris.

### Authentification
- Gestion simple via un `AuthService` avec `localStorage`.
- Mode **démo** : possibilité de se connecter/déconnecter comme `user` ou `admin`.
- L’accès à la page `/admin` est protégé par un guard (`adminGuard`).

---

## 🛠️ Architecture du projet

Organisation type Angular **standalone components** :

```
src/app
├── components
│   ├── cocktails
│   │   ├── components
│   │   │   ├── cocktails-list
│   │   │   └── cocktail-details
│   │   ├── cocktails.html / .ts / .css
│   ├── header
│   ├── footer
│   ├── panier
│   └── admin
├── interfaces
│   └── cocktail.interface.ts
├── data
│   └── data.ts (seed de cocktails)
├── services
│   ├── cocktails.service.ts
│   ├── favorites.service.ts
│   ├── cart.service.ts
│   └── auth.service.ts
├── app.ts          (AppComponent racine)
├── app.routes.ts   (Routing)
└── main.ts         (Bootstrap Angular)
```

---

## 🧩 Technologies

- **Angular 17+** (standalone components)
- **Signals** (`signal`, `computed`) pour la gestion réactive.
- **LocalStorage** pour la persistance (cocktails, favoris, panier, utilisateurs).
- **TypeScript** pour le typage.
- **CSS custom** (mise en page simple et responsive).

---

## ▶️ Installation & Exécution

1. Cloner le projet :
   ```bash
   git clone https://github.com/SJOLK/cocktails.git
   cd cocktails
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de dev :
   ```bash
   ng serve -o
   ```

4. Ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

---

## 📚 Bonnes pratiques suivies

- Architecture claire (`core`/`features`/`shared` adaptée aux standalone components).
- Respect des principes **DRY**, **KISS**, **YAGNI**.
- Utilisation des services pour isoler la logique métier.
- Réutilisation des composants (ex: `cocktails-list`, `cocktail-details`).

---

## 📸 Aperçu

- **Cocktails** : liste + détails côte à côte.  
- **Panier** : ingrédients groupés avec compteurs.  
- **Admin** : gestion des cocktails et des utilisateurs.

---

## 👤 Auteur

Projet réalisé par *[RHANBOURI Omar aka SJOLK]*.  
Encadré par *[Mickael Cornillon aka dwaps]*.
