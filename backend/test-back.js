import { getArtistesByDate } from './backend.mjs';
import { getScenesByName } from './backend.mjs';
import { getArtistesAlphabetique } from './backend.mjs';
import { getArtisteById } from './backend.mjs';
import { getSceneById } from './backend.mjs';
import { getArtistesBySceneId } from './backend.mjs';
import { getArtistesBySceneName } from './backend.mjs';
import { addOrUpdate } from './backend.mjs';


// 1. Une fonction qui retourne la liste de tous les artistes triés par date de représentation.
async function testArtistesParDate() {
    try {
        const artistes = await getArtistesByDate();
        console.log("--- ARTISTES TRIÉS PAR DATE ---");
        artistes.forEach(a => {
            console.log(`- ${a.nom} (Date : ${a.date_passage})`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

//2. Une fonction qui retourne la liste de toutes les scènes triées par nom.
async function testScenesParNom() {
    try {
        const scenes = await getScenesByName();
        console.log("\n--- SCÈNES TRIÉES PAR NOM ---");
        scenes.forEach(s => {
            console.log(`- ${s.nom} (Capacité : ${s.capacite})`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

//3. Une fonction qui retourne la liste de tous les artistes triés par ordre alphabétique.
async function testArtistesAlphabetique() {
    try {
        const artistes = await getArtistesAlphabetique();
        console.log("\n--- ARTISTES TRIÉS PAR ORDRE ALPHABÉTIQUE ---");
        artistes.forEach(a => {
            console.log(`- ${a.nom}`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

//4. Une fonction qui retourne les infos d'un artiste en donnant son id en paramètre.
async function testArtisteById() {
    try {
        const artistes = await getArtistesByDate();
        if (artistes.length > 0) {
            const idTest = artistes[0].id;
            const artiste = await getArtisteById(idTest);
            console.log(`\n--- INFOS DE L'ARTISTE (ID: ${idTest}) ---`);
            console.log(`- Nom : ${artiste.nom}`);
            console.log(`- Date : ${artiste.date_passage}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//5. Une fonction qui retourne les infos d'une scène en donnant son id en paramètre.
async function testSceneById() {
    try {
        const scenes = await getScenesByName();
        if (scenes.length > 0) {
            const idTest = scenes[0].id;
            const scene = await getSceneById(idTest);
            console.log(`\n--- INFOS DE LA SCÈNE (ID: ${idTest}) ---`);
            console.log(`- Nom : ${scene.nom}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//6. Une fonction qui retourne tous les artistes se produisant sur une scène donnée par son id, triés par date.
async function testArtistesBySceneId() {
    try {
        const scenes = await getScenesByName();
        if (scenes.length > 0) {
            const idTest = scenes[0].id;
            const artistes = await getArtistesBySceneId(idTest);
            console.log(`\n--- ARTISTES POUR LA SCÈNE (ID: ${idTest}) ---`);
            artistes.forEach(a => {
                console.log(`- ${a.nom} (Date : ${a.date_passage})`);
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}

//7. Une fonction qui retourne tous les artistes se produisant sur une scène donnée par son nom, triés par date.
async function testArtistesBySceneName() {
    try {
        const scenes = await getScenesByName();
        if (scenes.length > 0) {
            const nomTest = scenes[0].nom;
            const artistes = await getArtistesBySceneName(nomTest);
            console.log(`\n--- ARTISTES POUR LA SCÈNE (NOM: ${nomTest}) ---`);
            artistes.forEach(a => {
                console.log(`- ${a.nom} (Date : ${a.date_passage})`);
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}

//8. Une fonction qui permet d'ajouter ou modifier les informations d'un artiste ou d'une scène.
async function testAddOrUpdate() {
    try {
        const nouvelleScene = {
            nom: "Scène Test Temporaire"
        };
        const sceneCree = await addOrUpdate('scenes', nouvelleScene);
        console.log(`\n--- CRÉATION SCÈNE ---`);
        console.log(`- Créée : ${sceneCree.nom} (ID: ${sceneCree.id})`);

        const sceneModifiee = {
            id: sceneCree.id,
            nom: "Scène Test Modifiée"
        };
        const sceneUpdate = await addOrUpdate('scenes', sceneModifiee);
        console.log(`--- MODIFICATION SCÈNE ---`);
        console.log(`- Modifiée : ${sceneUpdate.nom} (ID: ${sceneUpdate.id})`);

    } catch (error) {
        console.error(error.message);
    }
}



// Décommenter pour tester les fonctions

// testArtistesParDate();
// testScenesParNom();
// testArtistesAlphabetique();
// testArtisteById();
// testSceneById();
// testArtistesBySceneId();
// testArtistesBySceneName();
// testAddOrUpdate();