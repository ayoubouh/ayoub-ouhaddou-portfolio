# Guide de Déploiement sur Vercel

## 📋 Prérequis

- Un compte GitHub (vous avez : **ayoubouh**)
- Un compte Vercel (gratuit)

## 🚀 Étapes de Déploiement

### Étape 1 : Créer un Compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur le bouton **"Sign Up"** en haut à droite
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub
5. Confirmez votre email

### Étape 2 : Importer le Projet

1. Une fois connecté à Vercel, vous verrez le tableau de bord
2. Cliquez sur le bouton **"New Project"** ou **"Add New..."**
3. Vous verrez une liste de vos repositories GitHub
4. Cherchez et cliquez sur **"ayoub-ouhaddou-portfolio"**
5. Cliquez sur **"Import"**

### Étape 3 : Configurer le Projet

Vercel affichera une page de configuration. Voici ce que vous verrez :

**Project Name :**
- Laissez : `ayoub-ouhaddou-portfolio` (ou changez si vous préférez)

**Framework Preset :**
- Vercel détectera automatiquement : **Vite**
- C'est correct, ne changez rien

**Root Directory :**
- Laissez vide (c'est la racine du projet)

**Build Command :**
- Vercel affichera : `pnpm run build`
- C'est correct ✓

**Output Directory :**
- Vercel affichera : `dist`
- C'est correct ✓

**Environment Variables :**
- Vous n'en avez pas besoin pour ce projet
- Laissez vide

### Étape 4 : Déployer

1. Cliquez sur le bouton **"Deploy"** en bas à droite
2. Attendez 2-3 minutes
3. Vercel affichera un message "Congratulations! Your project has been successfully deployed"

### Étape 5 : Accéder à Votre Site

Une fois le déploiement terminé, vous verrez :

```
🎉 Deployment successful!

Your project is live at:
https://ayoub-ouhaddou-portfolio.vercel.app
```

Cliquez sur le lien pour voir votre portfolio en ligne !

## 🔗 URLs Importantes

| Ressource | URL |
|-----------|-----|
| **Votre Portfolio** | https://ayoub-ouhaddou-portfolio.vercel.app |
| **Repository GitHub** | https://github.com/ayoubouh/ayoub-ouhaddou-portfolio |
| **Dashboard Vercel** | https://vercel.com/dashboard |

## 🔄 Déploiements Automatiques

Chaque fois que vous pousserez du code vers GitHub :

```bash
git add .
git commit -m "Description de vos changements"
git push origin master
```

Vercel détectera automatiquement les changements et redéploiera votre site en 1-2 minutes !

## 🎨 Personnaliser Votre Domaine

### Option 1 : Utiliser le Domaine Vercel (Gratuit)
- Votre site est déjà accessible à : `https://ayoub-ouhaddou-portfolio.vercel.app`
- C'est gratuit et permanent

### Option 2 : Ajouter un Domaine Personnalisé

Si vous avez un domaine personnalisé (par exemple : `ayoub.ma`) :

1. Allez sur votre dashboard Vercel
2. Sélectionnez votre projet
3. Allez dans **"Settings"** → **"Domains"**
4. Cliquez sur **"Add Domain"**
5. Entrez votre domaine
6. Suivez les instructions pour configurer les DNS

## ❓ Dépannage

### Le déploiement échoue ?

**Vérifiez :**
1. Que votre code est bien poussé sur GitHub
2. Que le fichier `package.json` existe
3. Que le fichier `vite.config.ts` existe
4. Que le dossier `src` existe

### Le site affiche une erreur 404 ?

1. Allez sur le dashboard Vercel
2. Cliquez sur votre projet
3. Allez dans **"Deployments"**
4. Vérifiez les logs du dernier déploiement
5. Cherchez les erreurs en rouge

### Comment voir les logs du déploiement ?

1. Dashboard Vercel → Votre projet
2. Cliquez sur **"Deployments"**
3. Cliquez sur le déploiement (le plus récent en haut)
4. Cliquez sur **"Build Logs"**

## 📞 Support

Si vous avez des problèmes :

1. Vérifiez les logs Vercel (voir section Dépannage)
2. Contactez le support Vercel : https://vercel.com/support
3. Consultez la documentation Vercel : https://vercel.com/docs

## ✅ Checklist de Déploiement

- [ ] Compte Vercel créé
- [ ] Compte GitHub connecté à Vercel
- [ ] Projet importé dans Vercel
- [ ] Configuration vérifiée
- [ ] Déploiement lancé
- [ ] Site accessible à `https://ayoub-ouhaddou-portfolio.vercel.app`
- [ ] Vérifier que toutes les pages s'affichent correctement
- [ ] Tester le formulaire de contact
- [ ] Tester la responsivité sur mobile

---

**Besoin d'aide ?** Contactez-moi : studio.a.events27@gmail.com
