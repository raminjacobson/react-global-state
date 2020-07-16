// export default [
//     { year: 2020, title: "Parasite" },
//     { year: 2019, title: "Green Book" },
//     { year: 2018, title: "The Shape of Water" },
//     { year: 2017, title: "Moonlight" },
//     { year: 2016, title: "Spotlight" },
//     { year: 2015, title: "Birdman" },
// ];

import FBApp from './db';

const colRef = FBApp.firestore().collection('movies');

const addID = (obj, id) => Object.assign(obj, { _id: id });

export async function getAllMovies() {
    try {
        const snapshot = await colRef.get()
        return snapshot.docs.map(doc => addID(doc.data(), doc.id));
    } catch (error) {
        console.log(error);
    }
}

export async function addMovie(movie) {
    try {
        const doc = await colRef.add(movie);
        return addID(movie, doc.id)
    } catch (error) {
        console.log(error);
    }
}

export async function updateMovie(movie) {
    try {
        const doc = await colRef.doc(movie._id).update(movie);
        return addID(movie, doc.id)
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMovie(id) {
    try {
        await colRef.doc(id).delete();
    } catch (error) {
        console.log(error);
    }

}