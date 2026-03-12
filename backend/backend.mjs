import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://lafanfacomtoise.menigoz.optimiseus.fr');
pb.autoCancellation(false);
// Partie 2
export async function getArtistesByDate() {
    return await pb.collection('artistes').getFullList({
        sort: 'date_passage',
        expand: 'scene_id'
    });
}

export async function getScenesByName() {
    return await pb.collection('scenes').getFullList({
        sort: 'nom'
    });
}

export async function getArtistesAlphabetique() {
    return await pb.collection('artistes').getFullList({
        sort: 'nom',
        expand: 'scene_id'
    });
}

export async function getArtisteById(id) {
    return await pb.collection('artistes').getOne(id, {
        expand: 'scene_id'
    });
}

export async function getSceneById(id) {
    return await pb.collection('scenes').getOne(id);
}

export async function getArtistesBySceneId(id) {
    return await pb.collection('artistes').getFullList({
        filter: `scene_id = "${id}"`,
        sort: 'date_passage',
        expand: 'scene_id'
    });
}

export async function getArtistesBySceneName(nom) {
    return await pb.collection('artistes').getFullList({
        filter: `scene_id.nom = "${nom}"`,
        sort: 'date_passage',
        expand: 'scene_id'
    });
}

export async function addOrUpdate(collection, data) {
    if (data.id) {
        return await pb.collection(collection).update(data.id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}

// Travail supplémentaire
export async function login(email, password) {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        console.log("Connecté :", pb.authStore.isValid);
        console.log("Utilisateur :", pb.authStore.record);
        return { success: true, record: pb.authStore.record };
    } catch (e) {
        console.error("Erreur de connexion :", e.message);
        return { success: false, message: e.message };
    }
}

export function logout() {
    pb.authStore.clear();
}